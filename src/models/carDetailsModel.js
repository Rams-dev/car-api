module.exports = (sequelize, type) => {
    return sequelize.define('carDetails',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        carId:type.INTEGER,
        productName: type.STRING,
        amount: type.INTEGER,
        price:type.DECIMAL
    })

}