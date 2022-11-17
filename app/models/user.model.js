const connection = require('../../database/connection')

var Models = {
    getUser: (callback) => {
        if(connection) {
            let sql = `select * from user`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getOneUser: (data, callback) => {
        console.log("id : ", data)
        if(connection) {
            let sql = `select * from user  where user_id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addUser: (data, callback) => {

        if(connection) {
            let sql = `insert into user (user_name, user_email, user_phone, user_password) values (
            ${connection.escape(data.user_name, user_email, user_phone, user_password)})`
              
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'el usuario  fue creado'})
            })
        }
    },

    editOrdersProducts : (data, callback) => {
        if(connection) {
            let sql = `update user set user_name, user_email, user_phone, user_password = 
            ${connection.escape(data.user_name, user_email, user_phone, user_password)} where 
            order_product_id = ${connection.escape(data.user_id)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: ' El usuario  actualizado'})
            })
        }
    }
/*
    deleteOrdersProducts : (data, callback) => {
        if(connection) {
            let sql = `delete from order_product where order_product_id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: 'pedido eliminado'})
            })
        }
 
    }*/

    
}

module.exports = Models