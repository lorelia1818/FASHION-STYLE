const express = require ('express')
const route = require('express').Router()
const {getOrdersProducts, getOneOrdersProducts, addOrdersProducts}
 = require('../controllers/orderproduct.controller')

route.route('/orderproduct').get(getOrdersProducts)
route.route('/orderproduct/:order_product_id').get(getOneOrdersProducts)
route.route('/orderproduct').post(addOrdersProducts)

module.exports = route