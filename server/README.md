# JARVIS backend

## setup

### Prerequisites

- Node 18
- [docker](https://docs.docker.com/desktop/)

### description

- This backend relies on docker image to provide an influx database
- After running the starting command, the api server and influx database will be running on localhost port:
  - APi server: 5000
  - Influx database: 8086

### Running

#### Run

*Starting:*
`docker compose up`

*Stopping:*
`docker compose down`
