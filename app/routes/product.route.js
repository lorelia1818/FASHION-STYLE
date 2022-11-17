const express = require ('express')
const route = require('express').Router()
const {getProducts, getOneProducts, addProducts}
 = require('../controllers/product.controller')

route.route('/product').get(getProducts)
route.route('/product/:product_id').get(getOneProducts)
route.route('/product').post(addProducts)

module.exports = route