const router = require('express').Router()
const authRoute = require('./auth')
const ProductsRoute = require('./products')
const carRoute = require('./car')

router.use(authRoute)
router.use(ProductsRoute)
router.use(carRoute)



module.exports = router