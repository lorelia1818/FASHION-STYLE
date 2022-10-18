const connection = require('../../database/connection')

var Models = {
    getOrders: (callback) => {
        if(connection) {
            let sql = `select * from orders`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getOneOrders: (data, callback) => {
        console.log("id : ", data)
        if(connection) {
            let sql = `select * from orders  where orders_id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addSOrders: (data, callback) => {

        if(connection) {
            let sql = `insert into orders (orders_qualification, orders_date) values (
            ${connection.escape(data.orders_qualification, orders_date)})`
              
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'el pedido  fue creado'})
            })
        }
    },

    editOrdersProducts : (data, callback) => {
        if(connection) {
            let sql = `update orders set orders_qualification, orders_date = ${connection.escape(data.order_product_amount)} where 
            order_product_id = ${connection.escape(data.order_product_id)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: ' Pedido  actualizado'})
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