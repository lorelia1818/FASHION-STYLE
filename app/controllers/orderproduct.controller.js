const Models = require('../models/orderproduct.model')

function getOrdersProducts(req, res){
    Models.getOrdersProducts ((data, error) => {

        res.json(data)

    } ) 
    
}

function getOneOrdersProducts(req, res){
    console.log("id : ", req.params)
    const { order_product_id } = req.params
    dataModels.getOneOrdersProducts(order_product_id, (data, error) => {
        res.json(data)
    })
}

function addOrdersProducts(req, res){
    const {order_product_amount} =  req.body
    console.log(`orderproduct: ${order_product_amount}`)
    dataModels.addOrdersProducts({order_product_amount}, (data, error) => {
        res.json(data)
    })
}

function editOrdersProducts(req, res) {
    const { order_product_id } = req.params
    const {order_product_amount } = req.body
    dataModels.editOrdersProducts({order_product_id, order_product_amount}, (data, error) => {
        res.json(data)
    })
}

function deleteOrdersProducts(req, res){
    const { order_product_id} = req.params
    dataModels.deleteOrdersProducts(order_product_id, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getOrdersProducts,
    getOneOrdersProducts,
    addOrdersProducts,
    editOrdersProducts,
    deleteOrdersProducts

}