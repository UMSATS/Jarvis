const db_url = "http://" + process.env.DB_HOST + ":" + process.env.DB_PORT;
const db_username = process.env.DB_USER;
const db_password = process.env.DB_PASS;
const db_adminToken = process.env.DB_TOKEN;
const api_port = 5000;

module.exports = { db_url, db_username, db_password, db_adminToken, api_port };