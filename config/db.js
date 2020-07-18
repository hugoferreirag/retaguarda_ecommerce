const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'jardim_online',
    password: '164223356@',
    port: 5432,
});
client.connect();
module.exports = client;