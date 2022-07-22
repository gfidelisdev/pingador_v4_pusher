const Model = require ("./Model")
const knex=require('../database/database')
class PingEvent extends Model {
    nwpoint_id
    created_at
    result
    fillable = [
        'nwpoint_id',
        'created_at',
        'result'
    ]
    fields =[
        'id',
        'nwpoint_id',
        'created_at',
        'result'
    ]

    table = 'ping_events'

    static getFields(){
        return new PingEvent().fields
    }

    static getFillabe(){
        return new PingEvent().fillable
    }


    constructor(){
        super()
    }

    setValues(values){
        this.fillable.forEach(el=>{
            this[el]=values[el]
        })
    }

    getJsonObject(){
        return {
            id: this.id,
            nwpoint_id: this.nwpoint_id,
            created_at:this.created_at,
            result: this.result
        }
    }
    find(params){
        let qParams = {}
        this.fields.forEach(field=>{
            if (params[field]) qParams[field] = params[field]
        })
        let data = knex.select().from(this.table).where(qParams).orderBy('id','desc').limit(params.limit)
        console.log(data.toSQL().toNative().sql)
        return data
    }
    // list(){
    //     return knex.select().from(this.table)
    // }
}

module.exports = PingEvent