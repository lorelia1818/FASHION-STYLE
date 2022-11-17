const connection = require('../../database/connection')

var Models = {
    getProducts: (callback) => {
        if(connection) {
            let sql = `select * from product`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getOneProducts: (data, callback) => {
        console.log("id : ", data)
        if(connection) {
            let sql = `select * from product  where product_id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addProducts: (data, callback) => {

        if(connection) {
            let sql = `insert into products (product_description, product_name, product_price) values (
            ${connection.escape(data.product_description, product_name, product_price)})`
              
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'El producto  fue creado'})
            })
        }
    },

    editProducts : (data, callback) => {
        if(connection) {
            let sql = `update product set product_description, product_name, product_price =
             ${connection.escape(data.product_description, product_name, product_price)} where 
            product_id = ${connection.escape(data.product_id)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: ' El producto es actualizado'})
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