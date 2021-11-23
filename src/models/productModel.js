module.exports = (sequelize, type) => {
    return sequelize.define('products', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:type.STRING,
        price:type.STRING,
        category:type.STRING
    })

}