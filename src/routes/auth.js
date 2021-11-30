const router = require('express').Router()
const { login, register } = require('../controllers/auth/loginController')
const emailNotExist = require('../middlewares/emailNotExist')
const { loginValidation, RegisterValidation } = require('../middlewares/validation')

router.post('/api/login', loginValidation ,login)
router.post('/api/register', RegisterValidation,emailNotExist,register)

module.exports = router