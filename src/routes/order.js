const router = require('express').Router()
const {create, get, getAll} = require('../controllers/orderController')
const {getItem} = require('../controllers/orderDetailController')
const { isLogged } = require('../helpers/JWT')

router.post('/api/order/:carId',isLogged ,create)
router.get('/api/order',isLogged,getAll)
router.get('/api/order/:orderId',isLogged,get)
router.get('/api/orderDetails',isLogged,getItem)

module.exports = router