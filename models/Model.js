const knex=require('../database/database')
class Model {
    id=null
    static table = null
    fields = []
    fillable = []
    

    constructor(){
    }
    save(){
        let register = {}
        this.fillable.forEach(field=>{
            if (this[field]) register[field] = this[field]
        })
        return knex(this.table).insert(register)
    }
    get(){
    }
    update(){
    }
    upsert(){
        if (this.id){
            this.update()
        }
        else {
            this.save()
        }
    }
    delete(){
    }
    purge(){
    }
    static findById(id){
    }
    static find(params){
    }
    static async list(){
        let result = await knex.select().from(this.table)
        return await result.map(item=>{
            return {...item}
        })
    }
}

module.exports = Model