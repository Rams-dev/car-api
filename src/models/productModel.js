module.exports = (sequelize, type) => {
    return sequelize.define('products', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:type.STRING,
        price:type.DECIMAL(10,2),
        category:type.STRING
    })

}