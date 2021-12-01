module.exports = (sequelize, type) => {
        return sequelize.define('order', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId:{
                type: type.INTEGER
            },
            price_total: type.DECIMAL
        })
}
