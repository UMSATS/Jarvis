const db_url = process.env.DB_URL;
const db_username = process.env.DB_USER;
const db_password = process.env.DB_PASS;
const db_adminToken = process.env.DB_TOKEN;
const api_port = 5000;

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

module.exports = { db_url, db_username, db_password, db_adminToken, api_port };