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
    static fields =[
        'id',
        'nwpoint_id',
        'created_at',
        'result'
    ]

    static table = 'ping_events'
    constructor(){
        super()
        this.table = 'ping_events'
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
    static find(params){
        let qParams = {}
        this.fields.forEach(field=>{
            if (params[field]) qParams[field] = params[field]
        })
        return knex.select().from(this.table).where(qParams).limit(params.limit)
    }
    static list(){
        return knex.select().from(this.table)
    }
}

module.exports = PingEvent