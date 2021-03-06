
const Sequelize = require('sequelize')
const userModel = require('./src/models/usersModel')
const productModel = require('./src/models/productModel')
const carModel = require('./src/models/carModel')
const carDetailsModel = require('./src/models/carDetailsModel')
const orderDetailsModel = require('./src/models/orderDetailsModel')
const orderModel = require('./src/models/orderModel')

const sequelize = new Sequelize(
    'carapi', 'root', '', {
        host: 'localhost', dialect: 'mysql'
    }
)

const users = userModel(sequelize, Sequelize)
const products = productModel(sequelize, Sequelize)
const cars = carModel(sequelize, Sequelize)
const carDetails = carDetailsModel(sequelize, Sequelize)
const order =  orderModel(sequelize, Sequelize)
const orderDetails = orderDetailsModel(sequelize, Sequelize)

sequelize.sync({force:false})
.then(() => {
    console.log("db connect")
})

module.exports = {
    users, products, cars, carDetails, order, orderDetails
}