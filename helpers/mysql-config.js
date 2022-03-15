const mysql = require('mysql');
const pool = mysql.createPool( {
    connectionLimit: 100,
    host: 'metaversedb.cubbpk8g1fcx.us-east-1.rds.amazonaws.com',
    user : 'admin',
    password : 'BlackJack-02',
    database : 'metaverse',
    debug : false
});

module.exports = pool;