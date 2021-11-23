const express = require('express')
const app = express();
app.set('port', process.env.PORT || 3010)
app.use(express.json())
require('../sequelizeDBMysql')
const routes = require('../src/routes/index')

app.use(routes)

app.listen(app.get('port'), () => {
    console.log(`this server is running on port ${app.get('port')}`)
})