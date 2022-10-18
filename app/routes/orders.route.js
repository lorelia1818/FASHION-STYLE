const express = require ('express')
const route = require('express').Router()
const {getOrders, getOneOrders, addOrders}
 = require('../controllers/orders.controller')

route.route('/orders').get(getOrders)
route.route('/orders/:orders_id').get(getOneOrders)
route.route('/orders').post(addOrders)

module.exports = route