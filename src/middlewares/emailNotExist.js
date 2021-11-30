const { users } = require("../../sequelizeDBMysql");

async function emailNotExist(req, res, next){
    const userExist = await users.findOne({
        where:{
            email: req.body.email
        }
    })
    if(userExist){
        return res.status(404).json({
            "messge":"this email already exist"
        })
    }
    next()

}

module.exports = emailNotExist