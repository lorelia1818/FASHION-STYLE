const mysql = require ('mysql');
    data = require('./privatedata.json');

    objectConection = {
        host: data.mysql.host,
        port: data.mysql.port,
        user: data.mysql.user,
        pass: data.mysql.pass,
        database: data.mysql.database
    }

    const myConn = mysql.createConnection(objectConection)

    myConn.connect((err) => {
        if(err){
            console.log('an error occurred', err)
        }else{
            console.log('the database is connected')
        }
    })

    module.exports = myConn