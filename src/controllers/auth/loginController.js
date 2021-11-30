const bcrypt = require('bcrypt')
const {users} = require('../../../sequelizeDBMysql')
const { createJwt } = require('../../helpers/JWT.js')
const errorsValidation = require('../../middlewares/errorsValidation')
// const UserRepository = require('../../repositories/UserRepository')

async function login(req, res) {
    // const Repository = new UserRepository()
    errorsValidation(req, res)
    const {email, password} = req.body
    const user = await users.findOne({where:{email:email}})
    
    if(user){
        let isEqual = bcrypt.compareSync(password, user.password)
        if(isEqual){
            
            res.status(200).json({
                "message": "Welcome " + user.name,
                "token": createJwt(user)
            })
        }
    }
    res.status(404).json({
        "mesage": "Your credentialas are not register on our db"
    })

}

async function register(req, res){ 
    errorsValidation(req, res)

    req.body.password = bcrypt.hashSync(req.body.password,10)

    const newUser = await users.create(req.body)

    res.status(201).json({
        "message" : "usuario creado",
        newUser
    })
    
}

module.exports = {login, register}