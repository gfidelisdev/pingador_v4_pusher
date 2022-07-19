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
    static get(id){
        return knex(this.table).first().where({id})
        // return JSON.parse(JSON.stringify(result))
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
        return knex.select().from(this.table).where(params).where('deleted_at',null)
    }
    static list(){
        return knex.select().from(this.table).where('deleted_at',null)
        // return await result.map(item=>{
        //     return {...item}
        // })
    }
}

module.exports = Model