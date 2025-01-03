const db_url = "http://"+process.env.DB_HOST+":"+process.env.DB_PORT;
const db_username = process.env.DB_USER;
const db_password = process.env.DB_PASS;
const db_adminToken = process.env.DB_TOKEN;
const db_bucket = process.env.DB_BUCKET;
const db_org = process.env.DB_ORG;
const api_port = 5000;

/**
 * env.js
 * @brief This file is used to set the environment variables for the application, mostly depends on docker-compose.yaml
 */

if(!db_url){
    console.error('DB_URL is not set');
    process.exit(1);
}
if(!db_username){
    console.error('DB_USER is not set');
    process.exit(1);
}
if(!db_password){
    console.error('DB_PASS is not set');
    process.exit(1);
}
if(!db_adminToken){
    console.error('DB_TOKEN is not set');
    process.exit(1);
}
if(!api_port){
    console.error('API_PORT is not set');
    process.exit(1);
}
if(!db_bucket){
    console.error('DB_BUCKET is not set');
    process.exit(1);
}
if(!db_org){
    console.error('DB_ORG is not set');
    process.exit(1);
}

module.exports = { db_url, db_username, db_password, db_adminToken, api_port, db_bucket, db_org };