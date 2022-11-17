const express = require ('express')
const route = require('express').Router()
const {getUser, getOneUser, addUser}
 = require('../controllers/user.controller')

route.route('/user').get(getUser)
route.route('/user/:user_id').get(getOneUser)
route.route('/user').post(addUser)

module.exports = route