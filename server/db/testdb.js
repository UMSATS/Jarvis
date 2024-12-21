const {InfluxDB, Point} = require('@influxdata/influxdb-client')
const {DeleteAPI} = require('@influxdata/influxdb-client-apis')
const db_url = "http://localhost:8086"
const db_username = "admin"
const db_password = "adminPassword"
const adminToken = "umsatsAdminToken"
const org = "umsats"
const bucket = "jarvis"

const client = new InfluxDB({url: db_url, token: adminToken})
const writeApi = client.getWriteApi(org, bucket)
const queryApi = client.getQueryApi(org)
const deleteApi = new DeleteAPI(client)

async function wellQuery(wellNum){
    const query = `from(bucket: "${bucket}") |> range(start: -1h) |> filter(fn: (r) => r._measurement == "well temperature" and r.well == "${wellNum}")`
    try{
        for await (const {values, tableMeta} of queryApi.iterateRows(query)){
            const o = tableMeta.toObject(values)
            console.log(
                `Well ${o.well} has a temperature of ${o._value} at ${o._time}`
            )
        }
        console.log('completed query')
    } catch (error) {
        console.error(`Error querying data for well ${wellNum}:`, error)
    }
}

async function updateWellData(wellNum, tempNum){
    try{
        const point = new Point('well temperature')
            .tag('well', wellNum)
            .floatField('temp', tempNum)

        writeApi.writePoint(point)
    } catch (error) {
        console.error(`Error initializing data for well ${wellNum}:`, error)
    }
}

async function initWells(){
    writeApi.useDefaultTags({host: 'Payload'})
    for(i = 1; i <= 16; i++){
        await updateWellData(i, 0)
    }

    await writeApi.flush()
}

async function main() {
    //await initWells()
    await wellQuery(1)
}

main()