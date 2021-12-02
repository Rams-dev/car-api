const router = require('express').Router()
const authRoute = require('./auth')
const ProductsRoute = require('./products')
const carRoute = require('./car')
const orderRoute = require('./order')

router.use(authRoute)
router.use(ProductsRoute)
router.use(carRoute)
router.use(orderRoute)



module.exports = router