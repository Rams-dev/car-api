const {cars, carDetails} = require('../../sequelizeDBMysql')
/****
 * 
 * create function recive userid and price total.
 * price total have tu introduce later logic carDetailsControllers
 */

async function store(obj){
    let car = await cars.create(obj)
    return car.id
}

async function update(carId, obj){
    try{
        await cars.update(obj,{
            where:{
                id:carId
            }
        })    
        return true 
    }catch{
       return false
    }
}

async function destroy(req, res){
    const {carId} = req.params
    try{
        const deleted = await carDetails.destroy(
            {
                where:{
                    carId: carId
                }
            }
        )
        const cardelte = await cars.destroy({where:{id:carId}})
        res.json({
            "message":"car deleted"
        })

    }catch{
        res.status(401).json({
            "message": "error, try later"
        })
    }
}


module.exports = {
    store,
    update,
    destroy
}