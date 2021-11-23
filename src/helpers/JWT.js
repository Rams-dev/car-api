const moment = require('moment')
const jwt = require('jwt-simple')
const {key} = require('../settings')


function createJwt(user){
    let payload = {
        userId: user.id,
        createAt: moment().unix(),
        expireAt: moment().add(5, 'minutes').unix(),
    }

    return jwt.encode(payload, key)

}


function isLogged(req, res, nex){
    const userToken = req.headers['authorization'].split(' ')[1]
    let payload = {}
    try{
        payload = jwt.decode(userToken, key)
    }catch{
        return res.status(401).json({
            "message":"your are not authorized"
        })
    }

    if(payload.expireAt < moment.unix()){
        res.status(401).json({'message':'token expired'})
    }

    req.userId = payload.userId 
    next()
}

module.exports = {isLogged,createJwt}