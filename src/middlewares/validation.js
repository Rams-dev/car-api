const { body } = require('express-validator');

const loginValidation = [
    body('email')
        .isEmail()
        .notEmpty(),
];


const RegisterValidation = [
    body('name')
        .isString()
        .notEmpty(),
    body('email')
        .isEmail()
        .withMessage("Email incorrect")
        .notEmpty(),
    body('password')
        .isLength({ min: 4 })
        .withMessage('password must be min 4 characters')
        .notEmpty(),
];

const productValidation = [
    body('name')
        .isString()
        .notEmpty(),
    body('price')
        .isNumeric(),
    body('category')
        .isString()
        .trim()
        .notEmpty()
]

module.exports = {loginValidation, productValidation, RegisterValidation}