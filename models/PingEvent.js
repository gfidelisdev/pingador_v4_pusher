const Model = require ("./Model")

class PingEvent extends Model {
    network_point
    created_at
    result
    fillable = [
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
}

module.exports = PingEvent