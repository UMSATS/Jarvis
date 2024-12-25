const {InfluxDB, Point} = require('@influxdata/influxdb-client')
const { db_url, db_adminToken } = require('./env')

async function dbInit(dbInstance = null){
    if(dbInstance == null){
        dbInstance = new InfluxDB({ url: db_url, token: db_adminToken })
    }

    const writeApi = dbInstance.getWriteApi('umsats', 'jarvis')


}

async function wellsInit(){
    
}