const express = require ('express')
const route = require('express').Router()
const {getPaymentMethod, getOnePaymentMethod, addPaymentMethod}
 = require('../controllers/paymentmethod.controller')

route.route('/paymentmethod').get(getPaymentMethod)
route.route('/paymentmethod/:payment_method_id').get(getOnePaymentMethod)
route.route('/paymentmethod').post(addPaymentMethod)

module.exports = route