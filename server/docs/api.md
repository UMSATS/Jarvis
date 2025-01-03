# API temporary documentation

## routes

### Payload

#### wells temperture

- /payload/wells/temp/{:well number}
  - will return an json array of wells temperture
  - e.g: [{"well":"16","timestamp":"2025-01-03T22:25:25.202Z","temperature":0},{"well":"16","timestamp":"2025-01-03T22:27:51.99Z","temperature":0}]
    - well: well number
    - timestamp: in IS0 8601 format
    - temperature: TBD
