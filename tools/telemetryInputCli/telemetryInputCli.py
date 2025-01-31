import cmd
from datetime import datetime, timezone
from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS
from dotenv import load_dotenv, dotenv_values

load_dotenv()
config = dotenv_values(".env")

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
    
    def do_insert_wells(self, arg):
        'Insert data into all wells with current time'
        print("Please enter the data you want to insert: ")
        try:
            data = float(input())
        except ValueError:
            print("Invalid input")
            return
        for well in range(1, 17):
            point = Point('well temperature').tag("well", well).field("temp", data).time(datetime.now(timezone.utc), WritePrecision.NS).tag("host", self.payloadTag)
            self.write_api.write(self.bucket, self.org, point)
        print("Data inserted successfully")
    
    def do_insert_well(self, arg):
        'Insert data into a specific well with current time'
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
        point = Point('well temperature').tag("well", well).field("temp", data).time(datetime.now(timezone.utc), WritePrecision.NS).tag("host", self.payloadTag)
        self.write_api.write(self.bucket, self.org, point)
        print("Data inserted successfully")

if __name__ == '__main__':
    TelemetryInputCli().cmdloop()