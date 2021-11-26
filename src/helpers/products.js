const {cars, carDetails, products} = require('../../sequelizeDBMysql')

async function calculatefinalPriceProductplus(product_id, carId, amount){
    const car = await cars.findOne({where:{id:carId}})
    const productInfo = await products.findOne({where:{id:product_id}})
    if(car != []){        
        return parseFloat(car.price_total) + (parseFloat(productInfo.price) * amount)  
    }
    return parseFloat(productInfo.price) * amount
}

async function calculatefinalPriceProductless(product_id, carId){
    const car = await cars.findOne({where:{id:carId}})
    const productCar = await carDetails.findOne({where:{product_id:product_id, carId:carId}})
    const product = await products.findOne({where:{id:product_id}})   
    if(car){   
        return parseFloat(car.price_total) - (parseFloat(product.price) * productCar.amount)
    }
    return 0
}

module.exports = {calculatefinalPriceProductplus, calculatefinalPriceProductless}

