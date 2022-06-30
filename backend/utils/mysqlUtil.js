
var mysql = require('mysql')
var argvUtil = require('./argvUtil')
var config = require('../config')

if (argvUtil.get('env') === 'test') {
    var config = require('../config/index.test')
}

if (argvUtil.get('env') === 'prod') {
    var config = require('../config/index.prod')
}


var pool = mysql.createPool({
    host: config.mysql.HOST,
    port: config.mysql.PORT,
    user: config.mysql.USERNAME,
    password: config.mysql.PASSWORD,
    database: config.mysql.DATABASE
})

var mysqlUtil = {
    query: (sql, values) => {
        console.log(sql)
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
            })
        })
    }
}

module.exports = mysqlUtil