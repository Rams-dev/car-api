const {cars, carDetails} = require('../../sequelizeDBMysql')
const {update} = require('./carController')
const {calculatefinalPriceProductplus, calculatefinalPriceProductless} = require('../helpers/products')


async function existItem(item, carId){
    const cardetail = await carDetails.findOne({where:{carId:carId, product_id:item}})
    return cardetail
}

/****
 * 
 * create function recive userid and price total.
 * price total have tu introduce later logic carDetailsControllers
 */

/**
 * 
 * @param {productId, userId, amount} req 
 * @param {*} res 
 */

async function show(req, res) {
    const [results, metadata] = await cars.sequelize.query(
        `select * from cars 
        inner join carDetails on cars.id = carDetails.carId
        inner join products on carDetails.product_id = products.id 
        where cars.userId = :userId`,{
        replacements: { userId: req.userId},
        plain: false,
    })

    res.status(200).json({"data": results})
}


async function storeItem(req, res){
    try{
        console.log(await existItem(req.body.product_id, req.body.carId))
        let productExisInCar = await existItem(req.body.product_id, req.body.carId)
        if(productExisInCar){   
            carDetails.update(
                {"amount": productExisInCar.amount + req.body.amount},
                {where:{product_id: productExisInCar.product_id}})
        }else{
            await carDetails.create(req.body)
        }
        let priceTotal = await calculatefinalPriceProductplus(req.body.product_id,req.body.carId,req.body.amount)
        update(req.body.carId,{"price_total": priceTotal })
            res.status(201).json({
                "message": "Product add"
            })
    }catch{
        res.status(401).json({
            "message": "error, try later"
        })
    }
}

async function updateItem(req, res){
    try{
        const carupdate = await cars.update(req.body,{
            where:{
                id:req.params.id
            }
        })    
        res.status(200).json({
            "message":"car update",
            "data":carupdate
        })
    }catch{
        res.status(404).json({
            "message":"error, try later"
        })
    }
}

async function destroyItem(req, res){
    const {carId, productId} = req.params
    try{
        let priceTotal = await calculatefinalPriceProductless(productId,carId) 
        await update(carId,{"price_total": priceTotal })
        const cardelte = await carDetails.destroy({where:{product_id:productId}})
        res.json({
            "message":"item deleted"
        })
    }catch{
        res.status(404).json({
            "message": "error, try later"
        })
    }
}


module.exports = {
    show,
    storeItem,
    updateItem,
    destroyItem
}