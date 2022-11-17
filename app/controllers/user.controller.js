const Models = require('../models/user.model')

function getUser(req, res){
    Models.getUser ((data, error) => {

        res.json(data)

    } ) 
    
}

function getOneUser(req, res){
    console.log("id : ", req.params)
    const { user_id } = req.params
    dataModels.getOneUser(_id, (data, error) => {
        res.json(data)
    })
}

function addUser(req, res){
    const {user_name, user_email, user_phone, user_password} =  req.body
    console.log(`user: ${user_name, user_email, user_phone, user_password }`)
    dataModels.addUser({user_name, user_email, user_phone, user_password}, (data, error) => {
        res.json(data)
    })
}

function editUser(req, res) {
    const { user_id } = req.params
    const {user_name, user_email, user_phone, user_password } = req.body
    dataModels.editUser({user_name, user_email, user_phone, user_password}, (data, error) => {
        res.json(data)
    })
}

function deleteUser(req, res){
    const { user_id} = req.params
    dataModels.deleteUser(User_id, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getUser,
    getOneUser,
    addUser,
    editUser,
    deleteUser

}