const {products, users} = require('../../sequelizeDBMysql')
const errorsValidation = require('../middlewares/errorsValidation')



async function get(req, res){
    try{
        const productsList = await products.findAll() 
        res.status(200).json({
            "data": productsList
        })
    }catch{
        res.status(404).json({
            "message": "error"
        })
    }
}

/*
    recive 
    "name"
    "price"
    "category" on de requestBody
 */
async function store(req, res){
    errorsValidation(req, res)

    try{
        const product = await products.create(req.body)
        res.status(201).json({
            "message": "New product add",
            product
        })
    }catch{
        res.status(404).json({
            "message": "try later"
        })
    }
}

async function show(req, res) {
    const {productId} = req.params
    let product = await users.findOne({where:{id: productId}})
    console.log(product)
    // if(product){
        res.status(200).json({"data": product}) 
    // }else{
    //     res.status(404).json({"message": "error"})   

    // }
}


async function destroy(req, res) {
     const {id} = req.params
    let product = await users.findOne({where:{id}})
    if(product){
        await users.destroy({
            where:{
                id:id
            }
        })
        res.status(200).json({"message": "product deleted"}) 
    }else{
        res.status(404).json({"message": "error"})   

    }
    

}


module.exports = {
    get,
    store,
    destroy,
    show
}