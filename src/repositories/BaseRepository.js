
class BaseRepository{
    model;
    constructor(model){
        this.model = model
    }


    async findOne(params){
        await this.model.findOne({
            where:{
                params
            }
        })
    }

    create(params){
        this.model.create(params)
    }


}

module.exports = BaseRepository