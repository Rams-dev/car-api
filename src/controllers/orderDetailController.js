const { cars, orderDetails, carDetails } = require("../../sequelizeDBMysql");

async function addItemToOrder(orderId, carId){
    
    try{
        const [results, metadata] = await cars.sequelize.query(
            `select price as product_price, name as product_name, amount as product_amount from cars 
            inner join carDetails on cars.id = carDetails.carId
            inner join products on carDetails.product_id = products.id 
            where cars.id = :carId`,{
            replacements: { carId: carId},
            plain: false,
        })
        
        results.forEach(async (dataCar) => {
            dataCar['orderId'] = orderId
            await orderDetails.create(dataCar)
        });
        return true
    }catch{
        console.log("nose que paso")
    }

} 

async function getItem(req, res) {
    const data = await orderDetails.findAll()
    res.status(200).json({
        "data": data
    })
}


module.exports = {
    addItemToOrder,
    getItem
}