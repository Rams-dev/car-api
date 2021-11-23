const BaseRepository = require('./BaseRepository')
const {users} = require('../../sequelizeDBMysql')

class UserRepository extends BaseRepository {
    constructor(users){
        super(users)
    }
}

module.exports = UserRepository;