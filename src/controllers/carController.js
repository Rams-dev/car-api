const {cars} = require('../../sequelizeDBMysql')
/****
 * 
 * create function recive userid and price total.
 * price total have tu introduce later logic carDetailsControllers
 */

async function store(obj){
    let car = await cars.create(obj)
    return car.id
    // res.status(201).json({
    //     "message": "Car created"
    // })
}

async function update(carId, obj){
    console.log("objs")
    console.log(obj)
    console.log("card"+ carId)
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
    const {id} = req.params
    try{
        const cardelte = await cars.destroy({where:{id:id}})
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