const Models = require('../models/product.model')

function getProducts(req, res){
    Models.getProducts ((data, error) => {

        res.json(data)

    } ) 
    
}

function getOneProducts(req, res){
    console.log("id : ", req.params)
    const { product_id } = req.params
    dataModels.getOneProducts(product_id, (data, error) => {
        res.json(data)
    })
}

function addProducts(req, res){
    const {product_description, product_name, product_price} =  req.body
    console.log(`product: ${product_description, product_name, product_price}`)
    dataModels.addProducts({product_description, product_name, product_price}, (data, error) => {
        res.json(data)
    })
}

function editProducts(req, res) {
    const { product_id } = req.params
    const {product_description, product_name, product_price} = req.body
    dataModels.editProducts({product_description, product_name, product_price}, (data, error) => {
        res.json(data)
    })
}

function deleteProducts(req, res){
    const { product_id} = req.params
    dataModels.deleteProducts(product_id, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getProducts,
    getOneProducts,
    addProducts,
    editProducts,
    deleteProducts

}