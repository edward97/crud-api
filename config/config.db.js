const mysql = require('mysql')
const conn = mysql.createConnection({
    // connect to db
    host: '192.168.100.20',
    user: 'trial',
    password: 'trial',
    database: 'db_testing'
})
conn.connect((err) => {
    if (err) throw err
    console.log('Successfully connected to the database.')
})

module.exports = conn
