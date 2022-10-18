const connection = require('../../database/connection')

var Models = {
    getOrdersProducts: (callback) => {
        if(connection) {
            let sql = `select * from order_product`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getOneOrdersProducts: (data, callback) => {
        console.log("id : ", data)
        if(connection) {
            let sql = `select * from order_product  where order_product_id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addSOrdersProducts: (data, callback) => {

        if(connection) {
            let sql = `insert into order_products (order_product_amount) values (
            ${connection.escape(data.order_product_amount)})`
              
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'El pedido  del producto  fue creado'})
            })
        }
    },

    editOrdersProducts : (data, callback) => {
        if(connection) {
            let sql = `update order_product set order_product_amount = ${connection.escape(data.order_product_amount)} where 
            order_product_id = ${connection.escape(data.order_product_id)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: ' El Pedido del producto es actualizado'})
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