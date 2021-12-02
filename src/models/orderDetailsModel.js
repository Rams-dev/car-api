module.exports = (sequelize, type) => {
    return sequelize.define('orderDetails',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderId:type.INTEGER,
        product_name: type.STRING,
        product_price: type.DECIMAL,
        product_amount: type.DECIMAL,
    })
}