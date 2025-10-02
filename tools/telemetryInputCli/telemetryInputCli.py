import cmd
from datetime import datetime, timezone, timedelta
from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS
from dotenv import load_dotenv, dotenv_values

# Load environment variables
load_dotenv()
config = dotenv_values(".env")

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

# insert data into magnetic field
def insertDataIntoMagField(variant: int, lsb: float, x: float, y: float, z: float, time: datetime, host: str, write_api, bucket: str, org: str):
    point = Point("magField").tag("variant", variant).field("LSB", lsb).field("X", x).field("Y", y).field("Z", z).time(time, WritePrecision.NS).tag("host", host)
    write_api.write(bucket, org, point)

class TelemetryInputCli(cmd.Cmd):
    # Set up the CLI
    url = config.get('URL')
    bucket = config.get('DB_BUCKET')
    org = config.get('DB_ORG')
    user = config.get('DB_USER')
    password = config.get('DB_PASSWORD')
    token = config.get('DB_TOKEN')
    payloadTag = config.get('PAYLOAD_TAG')
    wellTempField = config.get('WELL_TEMP_FIELD')
    wellLuminField = config.get('WELL_LUMIN_FIELD')
    adcsTag = config.get('ADCS_TAG')
    magField = config.get('MAG_FIELD')
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

    # insert humidity data into all wells with specified time
    def do_insert_lumin_wells(self, arg):
        'Insert luminance data into all wells with specified time'
        self.insert_data_into_wells(self.wellLuminField)

    # insert humidity data into a specific well with specified time
    def do_insert_lumin_well(self, arg):
        'Insert luminance data into a specific well with specified time'
        self.insert_data_into_well(self.wellLuminField)

    # insert magnetic field data with specified time
    def do_insert_mag_field(self, arg):
        'Insert magnetic field data with specified time'
        self.insert_data_into_mag_field(self.magField)

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

    # helper function to insert magnetic field data
    def insert_data_into_mag_field(self, field):
        period = askingForPeriod()
        calculatedTime = datetime.now(timezone.utc) - parsePeriod(period)
        variant = int(input("Please enter the variant number: ")) # TODO: should be limited to 2
        lsb = float(input("Please enter the LSB value: "))
        x = float(input("Please enter the X value: "))
        y = float(input("Please enter the Y value: "))
        z = float(input("Please enter the Z value: "))

        insertDataIntoMagField(variant, lsb, x, y, z, calculatedTime, self.adcsTag, self.write_api, self.bucket, self.org)
        print("Magnetic field data inserted successfully")

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