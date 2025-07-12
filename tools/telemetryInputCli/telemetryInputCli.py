import cmd
import pandas as pd
import os
import yaml
from typing import List, Dict
from datetime import datetime, timezone, timedelta
from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS
from dotenv import load_dotenv, dotenv_values

CONFIG_FILE = 'config.yaml'

# Load environment variables
load_dotenv()
env = dotenv_values(".env")

def load_table_configs() -> Dict[str, List[str]]:
    raw = yaml.safe_load(open(CONFIG_FILE, 'r'))
    table_configs: Dict[str, List[str]] = {}
    for entry in raw["tables"]:
        name = entry["name"]
        columns = entry["columns"]
        if not isinstance(columns, list):
            print(f"Invalid columns for table {name}. Expected a list, got {type(columns)}")
            continue
        table_configs[name] = (columns)
    return table_configs

# convert unix timestamp to datetime
def convert_unix_to_datetime(unix_timestamp: int):
    if unix_timestamp < 0:
        print(f"Invalid unix timestamp: {unix_timestamp}")
        return None
    return datetime.fromtimestamp(unix_timestamp, tz=timezone.utc)

# ask for period of time
def askingForPeriod() -> str:
    period = input("Please enter the period (digit)(h/d/w/m): ")
    if period[-1] not in ['h', 'd', 'w', 'm']:
        print("Invalid period")
        return askingForPeriod()
    if not period[:-1].isdigit():
        print("Invalid period")
        return askingForPeriod()
    return period

# parse period of time
def parsePeriod(period: str) -> datetime:
    period = period.lower()
    if period[-1] == 'h':
        return timedelta(hours=int(period[:-1]))
    elif period[-1] == 'd':
        return timedelta(days=int(period[:-1]))
    elif period[-1] == 'w':
        return timedelta(weeks=int(period[:-1]))
    elif period[-1] == 'm':
        return timedelta(minutes=int(period[:-1]))
    else:
        return timedelta(0)

# insert data into well
def insertDataIntoWell(well: int, field: str, data: float, time: datetime, host: str, write_api, bucket: str, org: str):
    point = Point("well").tag("well", well).field(field, data).time(time, WritePrecision.NS).tag("host", host)
    write_api.write(bucket, org, point)

# ask for file path
def askingForFilePath() -> str:
    path = input("Please enter the file path: ")
    if not path:
        print("Invalid file path")
        return None
    if not os.path.exists(path):
        print("File does not exist")
        return None
    return path

class TelemetryInputCli(cmd.Cmd):
    # load up config file
    table_configs = load_table_configs()
    # Set up the CLI
    url = env.get('URL')
    bucket = env.get('DB_BUCKET')
    org = env.get('DB_ORG')
    user = env.get('DB_USER')
    password = env.get('DB_PASSWORD')
    token = env.get('DB_TOKEN')
    payloadTag = env.get('PAYLOAD_TAG')
    wellTempField = env.get('WELL_TEMP_FIELD')
    wellLuminField = env.get('WELL_LUMIN_FIELD')
    client = InfluxDBClient(url=url, token=token, org=org)
    write_api = client.write_api(write_options=SYNCHRONOUS)
    prompt = '> '
    intro = 'Welcome to the Telemetry Input CLI. Type help or ? to list commands.\n'

    # exit the CLI
    def do_exit(self, arg):
        'Exit the CLI'
        return True
    
    # insert temperature data into all wells with specified time
    def do_insert_temp_wells(self, arg):
        'Insert temperature data into all wells with specified time'
        self.insert_data_into_wells(self.wellTempField)

    # insert temperature data into a specific well with specified time
    def do_insert_temp_well(self, arg):
        'Insert temperature data into a specific well with specified time'
        self.insert_data_into_well(self.wellTempField)

    # insert luminosity data into all wells with specified time
    def do_insert_lumin_wells(self, arg):
        'Insert luminosity data into all wells with specified time'
        self.insert_data_into_wells(self.wellLuminField)

    # insert luminosity data into a specific well with specified time
    def do_insert_lumin_well(self, arg):
        'Insert luminosity data into a specific well with specified time'
        self.insert_data_into_well(self.wellLuminField)

    def do_bulk_insert(self, arg):
        'Bulk insert data from a CSV file into the specified table'
        # print out available option from table_configs
        if not self.table_configs:
            print("No tables available for bulk insert.")
            return
        print("Available tables for bulk insert:")
        for table in self.table_configs.keys():
            print(f"- {table}")
        table = input("Please enter the table name: ")
        if table not in self.table_configs:
            print(f"Table {table} does not exist.")
            return
        filePath = askingForFilePath()
        if not filePath:
            return
        self.insert_data_from_df(table, filePath)

    # helper function to insert data into all wells
    def insert_data_into_wells(self, field):
        period = askingForPeriod()
        calculatedTime = datetime.now(timezone.utc) - parsePeriod(period)
        data = self.get_data_from_user()
        if data is None:
            return
        for well in range(1, 17):
            insertDataIntoWell(well, field, data, calculatedTime, self.payloadTag, self.write_api, self.bucket, self.org)
        print("Data inserted successfully")

    # helper function to insert data into a specific well
    def insert_data_into_well(self, field):
        period = askingForPeriod()
        calculatedTime = datetime.now(timezone.utc) - parsePeriod(period)
        well = self.get_well_number_from_user()
        if well is None:
            return
        data = self.get_data_from_user()
        if data is None:
            return
        insertDataIntoWell(well, field, data, calculatedTime, self.payloadTag, self.write_api, self.bucket, self.org)
        print("Data inserted successfully")
    
    # bulk insert data into bucket
    def insert_data_from_df(self, table:str, filePath:str):
        if not filePath:
            return
        if filePath.endswith('.csv'):
            try:
                df = pd.read_csv(filePath, usecols=self.table_configs[table])
            except ValueError as e:
                print(f"Error reading CSV file: {e}")
                return
        else:
            print("Unsupported file format. Please provide a CSV file.")
            return
        # print out record
        print(f"Loading {len(df)} records from {filePath} for table {table}.")
        if df.empty:
            print("No data to insert.")
            return
        # convert unix timestamp to datetime
        if 'timestamp' in df.columns:
            df['timestamp'] = df['timestamp'].apply(lambda x: convert_unix_to_datetime(x) if pd.notnull(x) else None)
        else:
            print("No timestamp column found in the data.")
            return
        # insert data into influxdb
        if table == self.wellTempField or table == self.wellLuminField:
            for index, row in df.iterrows():
                well_num = row.get('well_num')
                if pd.notnull(well_num) and 1 <= well_num <= 16:
                    time = row.get('timestamp')
                    if time is not None:
                        data = row.get('temperature') if table == self.wellTempField else row.get('luminosity')
                        if pd.notnull(data):
                            insertDataIntoWell(well_num, table, data, time, self.payloadTag, self.write_api, self.bucket, self.org)
                else:
                    print(f"Invalid well number {well_num} at index {index}. Skipping this record.")
        else:
            print(f"Unsupported table {table}. Only 'temp' and 'lumin' are supported for bulk insert.")
            return
        print(f"Data from {filePath} inserted into {table} table successfully.")

    # helper function to get data from user
    def get_data_from_user(self):
        print("Please enter the data you want to insert: ")
        try:
            return float(input())
        except ValueError:
            print("Invalid input")
            return None

    # helper function to get well number from user
    def get_well_number_from_user(self):
        print("Please enter the well number (1-16): ")
        try:
            well = int(input())
            if 1 <= well <= 16:
                return well
            else:
                print("Invalid well number")
                return None
        except ValueError:
            print("Invalid input")
            return None

if __name__ == '__main__':
    TelemetryInputCli().cmdloop()