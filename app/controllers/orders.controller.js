const Models = require('../models/orders.model')

function getOrders(req, res){
    Models.getOrders ((data, error) => {

        res.json(data)

    } ) 
    
}

function getOneOrders(req, res){
    console.log("id : ", req.params)
    const { orders_id } = req.params
    dataModels.getOneOrders(orders_id, (data, error) => {
        res.json(data)
    })
}

function addOrders(req, res){
    const {orders_qualification, orders_date} =  req.body
    console.log(`orders: ${orders_qualification, orders_date }`)
    dataModels.addOrders({orders_qualification, orders_date}, (data, error) => {
        res.json(data)
    })
}

function editOrders(req, res) {
    const { orders_id } = req.params
    const {orders_qualification, orders_date } = req.body
    dataModels.editOrders({order_product_id, orders_qualification, orders_date}, (data, error) => {
        res.json(data)
    })
}

function deleteOrders(req, res){
    const { orders_id} = req.params
    dataModels.deleteOrders(orders_id, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getOrders,
    getOneOrders,
    addOrders,
    editOrders,
    deleteOrders

}