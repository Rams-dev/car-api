const router = require('express').Router()

const {get, store, show, destroy} = require('../controllers/productsController')
router.get('/api/products',get)
router.post('/api/products',store)
router.get('/api/products/:productId',show)
router.delete('/api/products/:productId',destroy)

module.exports = router