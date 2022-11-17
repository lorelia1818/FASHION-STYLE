const connection = require('../../database/connection')

var Models = {
    getPaymentMethod: (callback) => {
        if(connection) {
            let sql = `select * from payment_method`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getOnePaymentMethod: (data, callback) => {
        console.log("id : ", data)
        if(connection) {
            let sql = `select * from payment_method  where payment_method_id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addPaymentMethod: (data, callback) => {

        if(connection) {
            let sql = `insert into payment_method (payment_method_name) values (
            ${connection.escape(data.payment_method_name)})`
              
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'Metodo de pago  creado'})
            })
        }
    },

    editPaymentMethod: (data, callback) => {
        if(connection) {
            let sql = `update payment_method set payment_method_name = ${connection.escape(data.payment_method_name)} where 
            order_product_id = ${connection.escape(data.payment_method_id)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: ' El pago esta autualizado actualizado'})
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