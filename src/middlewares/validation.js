const { body } = require('express-validator');

const loginValidation = [
    body('email')
        .isEmail()
        .exists(),
    body('password')
        .exists()
];


const RegisterValidation = [
    body('name')
        .exists()
        .isString(),
    body('email')
        .isEmail()
        .withMessage("Email incorrect")
        .exists(),
    body('password')
        .isLength({ min: 4 })
        .withMessage('password must be min 4 characters')
        .exists(),
];

const productValidation = [
    body('name')
        .isString()
        .exists(),
    body('price')
        .isNumeric(),
    body('category')
        .isString()
        .trim()
        .exists()
]

module.exports = {loginValidation, productValidation, RegisterValidation}