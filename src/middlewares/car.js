
const { cars } = require("../../sequelizeDBMysql")
const {store} = require('../controllers/carController')

module.exports = async (req, res, next) => {
    const car = await cars.findOne({where: {userId:req.userId}})
    if(car){
        req.body.carId = car.id
        next()
    }else{
        req.body.carId = await store({"userId":req.userId,price_total: 0})
        next()
    }
}