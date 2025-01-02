const {InfluxDB, Point} = require('@influxdata/influxdb-client')
const { db_url, db_adminToken, db_bucket, db_org } = require('../config/env')

async function dbInit(dbInstance = null){
    if(dbInstance == null){
        dbInstance = new InfluxDB({url: db_url, token: db_adminToken})
    }

    const writeApi = dbInstance.getWriteApi(db_org, db_bucket)
    await wellsInit(writeApi)
}

async function wellsInit(writeApiInstance){
    try{
        writeApiInstance.useDefaultTags({host: 'Payload'})
        for(i = 1; i <= 16; i++){
            const point = new Point('well temperature')
                .tag('well', i)
                .floatField('temp', 0)
                .timestamp(new Date())
            
            await writeApiInstance.writePoint(point)
        }
        await writeApiInstance.flush()
    } catch(error){
        console.error('Error initializing wells:', error)
    }
}

module.exports = dbInit;