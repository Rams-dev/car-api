const router = require('express').Router()
const {storeItem, show, destroyItem} =  require('../controllers/carDetailController')
const {destroy} =  require('../controllers/carController')
const {isLogged} =  require('../helpers/JWT')
const car= require('../middlewares/car')

 router.get('/api/car',isLogged,show)
 router.post('/api/car',isLogged,car,storeItem)
 router.delete('/api/car/:carId',isLogged,destroy)
 router.delete('/api/productCar/:carId/:productId',isLogged,destroyItem)


module.exports = router