# API temporary documentation

## routes

### Payload

#### wells temperture

- /payload/wells/temp/{:well number}?{period}
  - will return an json array of wells temperture
  - e.g: [{"well":"16","timestamp":"2025-01-03T22:25:25.202Z","temperature":0},{"well":"16","timestamp":"2025-01-03T22:27:51.99Z","temperature":0}]
    - well: well number
    - timestamp: in IS0 8601 format
    - temperature: TBD
  - query parameters
    - period
      - returning measurements with given period
      - default to be last 1 hour data
      - must be in the format of 1h, 1d, 1w, 1m, 1y, etc

#### wells luminosity

- /payload/wells/lumin/{:well number}?{period}
  - will return an json array of wells luminosity
  - e.g: [{"well":"16","timestamp":"2025-01-03T22:25:25.202Z","luminosity":0},{"well":"16","timestamp":"2025-01-03T22:27:51.99Z","luminosity":0}]
    - well: well number
    - timestamp: in IS0 8601 format
    - luminosity: TBD
  - query parameters
    - period
      - returning measurements with given period
      - default to be last 1 hour data
      - must be in the format of 1h, 1d, 1w, 1m, 1y, etc
