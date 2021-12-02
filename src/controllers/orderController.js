const { order, cars, orderDetails, carDetails } = require('../../sequelizeDBMysql')
const {addItemToOrder} = require('./orderDetailController')

async function create(req, res){
    const {carId} = req.params

    const dataCar = await cars.findOne({where:{id:carId}})
    const orderData = await order.create({
        'cardId' : carId,
        'userId':req.userId,
        'price_total' : dataCar.price_total,
    })

    // console.log(orderData)
    if(addItemToOrder(orderData.id,carId)){
        await carDetails.destroy({where:{carId:carId}})
        await cars.destroy({where:{id:carId}})
        return res.status(201).json({
            "message": "Order created",
            "data": dataCar
        })
    }

    return res.status(404).json({
        "message": "error, try later"
    })
}

async function getAll(req, res){

    const orders = await order.findAll({
        where:{
            userId: req.userId
        }
    })

    res.status(200).json({
        "data": orders
    })
    
}

async function get(req, res){
    const {orderId} = req.params
    const [results, metadata] = await order.sequelize.query(
        `select * from orders 
        inner join orderdetails on orders.id = orderdetails.orderId
        where orders.id = :orderId`,{
        replacements: { orderId: orderId},
        plain: false,
    })

    res.status(200).json({
        "data": results
    })
    
}

async function destoy(req, res){
    const {orderId} = req.params

    const orderDeleted = await orders.destroy(orderId)

    res.status(200).json({
        "message": "order deleted",
        "data": orderDeleted
    })
}

module.exports = {  
    getAll,
    get,
    create,
    destoy
}