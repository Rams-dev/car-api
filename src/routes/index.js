const router = require('express').Router()
const authRoute = require('./auth')
const ProductsRoute = require('./products')

router.use(authRoute)
router.use(ProductsRoute)



module.exports = router