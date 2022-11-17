const Models = require('../models/paymentmethod.model')

function getPaymentMethod(req, res){
    Models.getPaymentMethod ((data, error) => {

        res.json(data)

    } ) 
    
}

function getOnePaymentMethod(req, res){
    console.log("id : ", req.params)
    const { payment_method_id } = req.params
    dataModels.getOnePaymentMethod(payment_method_id, (data, error) => {
        res.json(data)
    })
}

function addPaymentMethod(req, res){
    const {payment_method_name} =  req.body
    console.log(`paymentmethod: ${payment_method_name}`)
    dataModels.addPaymentMethod({payment_method_name}, (data, error) => {
        res.json(data)
    })
}

function editPaymentMethod(req, res) {
    const { payment_method_id  } = req.params
    const {payment_method_name} = req.body
    dataModels.editPaymentMethod({payment_method_id, payment_method_name}, (data, error) => {
        res.json(data)
    })
}

function deletePaymentMethod(req, res){
    const { payment_method_id} = req.params
    dataModels.deletePaymentMethod(payment_method_id, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getPaymentMethod,
    getOnePaymentMethod,
    addPaymentMethod,
    editPaymentMethod,
    deletePaymentMethod

}