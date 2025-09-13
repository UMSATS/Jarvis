# telemetry Input Command Interface

## purpose

- design for testing influxDB
- input data into db without TARDIS

## usage

- `python telemetryInputCli.py`

## Prerequisites

- python 3.12.5 ish
- libraries
  - cmd
  - influxdb_client
  - dotenv
  - yaml

## functionality

- wells data input

## environment

### .env file

The script requires a file called '.env' with the following format:

```env
URL = <your URL>
DB_BUCKET = <your database bucket>
DB_ORG = <your database org tag>
DB_USER = <your database user name>
DB_PASSWORD = <your database password>
DB_TOKEN = <your database token>
...
```

### config.yaml

The script's bulk insert function requires a `config.yaml` to externally store the csv format of each table with the following format (to be extended):

```yaml
tables: # for read the data frame file
  - name: temp # need to match the field name in .env and influx table
    columns:
      - timestamp # UNIX timestamp
      - well_num
      - temperature

  - name: lumin
    columns:
      - timestamp # UNIX timestamp
      - well_num
      - luminosity
```
