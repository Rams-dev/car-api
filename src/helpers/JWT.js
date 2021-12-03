const moment = require('moment')
const jwt = require('jwt-simple')
const { key } = require('../settings')
const { users } = require('../../sequelizeDBMysql')


function createJwt(user) {
    let payload = {
        userId: user.id,
        createAt: moment().unix(),
        expireAt: moment().add(5, 'minutes').unix(),
    }

    return jwt.encode(payload, key)

}


async function isLogged(req, res, next) {
    if (!req.headers['authorization']) {
        return res.status(401).json({
            "message": "unAuthorized"
        })
    }
    const userToken = req.headers['authorization'].split(' ')[1]
    let payload = {}
    try {
        payload = jwt.decode(userToken, key)
    } catch {
        return res.status(401).json({
            "message": "your are not authorized"
        })
    }

    if (payload.expireAt < moment.unix()) {
        res.status(401).json({ 'message': 'token expired' })
    }
    const user = await users.findOne({ where: { id: payload.userId } })
    if (user) {
        req.userId = payload.userId
        next()
    } else {
        res.status(401).json({
            "message": "you are not authorized"

        })
    }

}

module.exports = { isLogged, createJwt }