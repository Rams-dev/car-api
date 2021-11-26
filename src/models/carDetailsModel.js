module.exports = (sequelize, type) => {
    return sequelize.define('carDetails',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        carId:type.INTEGER,
        product_id: type.INTEGER,
        amount: type.INTEGER
    })

}