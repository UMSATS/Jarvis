import cmd
from datetime import datetime, timezone, timedelta
from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS
from dotenv import load_dotenv, dotenv_values

load_dotenv()
config = dotenv_values(".env")

def askingForPeriod() -> str:
    period = input("Please enter the period (digit)(h/d/w/m): ")
    if period[-1] not in ['h', 'd', 'w', 'm']:
        print("Invalid period")
        return askingForPeriod()
    if not period[:-1].isdigit():
        print("Invalid period")
        return askingForPeriod()
    return period

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

def insertDataIntoWell(well: int, field: str, data: float, time: datetime, host: str, write_api, bucket: str, org: str):
    point = Point("well").tag("well", well).field(field, data).time(time, WritePrecision.NS).tag("host", host)
    write_api.write(bucket, org, point)

class TelemetryInputCli(cmd.Cmd):
    url = config.get('URL')
    bucket = config.get('DB_BUCKET')
    org = config.get('DB_ORG')
    user = config.get('DB_USER')
    password = config.get('DB_PASSWORD')
    token = config.get('DB_TOKEN')
    payloadTag = config.get('PAYLOAD_TAG')
    client = InfluxDBClient(url=url, token=token, org=org)
    write_api = client.write_api(write_options=SYNCHRONOUS)
    prompt = '> '
    intro = 'Welcome to the Telemetry Input CLI. Type help or ? to list commands.\n'

    def do_exit(self, arg):
        'Exit the CLI'
        return True
    
    def do_insert_temp_wells(self, arg):
        'Insert data into all wells with current time'
        period = askingForPeriod()
        calculatedTime: datetime = datetime.now(timezone.utc) - parsePeriod(period)
        print("Please enter the data you want to insert: ")
        try:
            data = float(input())
        except ValueError:
            print("Invalid input")
            return
        for well in range(1, 17):
            insertDataIntoWell(well, 'temp', data, calculatedTime, self.payloadTag, self.write_api, self.bucket, self.org)
        print("Data inserted successfully")
    
    def do_insert_temp_well(self, arg):
        'Insert data into a specific well with current time'
        period = askingForPeriod()
        calculatedTime: datetime = datetime.now(timezone.utc) - parsePeriod(period)
        print("Please enter the well number (1-16): ")
        try:
            well = int(input())
            if well < 1 or well > 16:
                print("Invalid well number")
                return
        except ValueError:
            print("Invalid input")
            return
        print("Please enter the data you want to insert: ")
        try:
            data = float(input())
        except ValueError:
            print("Invalid input")
            return
        insertDataIntoWell(well, 'temp', data, calculatedTime, self.payloadTag, self.write_api, self.bucket, self.org)
        print("Data inserted successfully")
    
    def do_insert_lumin_wells(self, arg):
        'Insert data into all wells with current time'
        period = askingForPeriod()
        calculatedTime: datetime = datetime.now(timezone.utc) - parsePeriod(period)
        print("Please enter the data you want to insert: ")
        try:
            data = float(input())
        except ValueError:
            print("Invalid input")
            return
        for well in range(1, 17):
            insertDataIntoWell(well, 'lumin', data, calculatedTime, self.payloadTag, self.write_api, self.bucket, self.org)
        print("Data inserted successfully")

if __name__ == '__main__':
    TelemetryInputCli().cmdloop()