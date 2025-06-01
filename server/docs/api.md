# API temporary documentation

## routes

### Payload

#### wells temperture

- /payload/wells/temp/{:well number}?{start}&{end}
  - must have start and end query parameters with seconds-only RFC3339 date format (no fractional seconds)
  - will return an json array of wells temperture
  - e.g: [{"well":"16","timestamp":"2025-01-03T22:25:25.202Z","temperature":0},{"well":"16","timestamp":"2025-01-03T22:27:51.99Z","temperature":0}]
    - well: well number
    - timestamp: in RFC3339 format
    - temperature: TBD
  - query parameters
    - start
      - start time of the query range
      - must in seconds-only RFC3339 date format
    - end
      - end time of the query range
      - must in seconds-only RFC3339 date format

#### wells luminosity

- /payload/wells/lumin/{:well number}?{start}&{end}
  - must have start and end query parameters with seconds-only RFC3339 date format (no fractional seconds)
  - will return an json array of wells luminosity
  - e.g: [{"well":"16","timestamp":"2025-01-03T22:25:25.202Z","luminosity":0},{"well":"16","timestamp":"2025-01-03T22:27:51.99Z","luminosity":0}]
    - well: well number
    - timestamp: in RFC3339 format
    - luminosity: TBD
  - query parameters
    - start
      - start time of the query range
      - must in seconds-only RFC3339 date format
    - end
      - end time of the query range
      - must in seconds-only RFC3339 date format
