const {validationResult} = require('express-validator')


async function errorsValidation(req, res){
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
}

module.exports = errorsValidation