const router = require('express').Router()
const {productValidation} = require('../middlewares/validation')
const {get, store, show, destroy} = require('../controllers/productsController')
const { isLogged } = require('../helpers/JWT')

router.get('/api/products',isLogged, get)
router.post('/api/products',isLogged, productValidation, store)
router.get('/api/products/:productId',isLogged,show)
router.delete('/api/products/:productId',isLogged,destroy)

module.exports = router