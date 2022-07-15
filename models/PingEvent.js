const Model = require ("./Model")

class PingEvent extends Model {
    network_point
    created_at
    result
    fillable = [
        'network_point_id',
        'created_at',
        'result'
    ]
    static table = 'ping_events'
    constructor(){
        super()
        this.table = 'ping_events'
    }

    setValues(result, network_point_id, created_at){
        this.result = result
        this.network_point_id = network_point_id
        this.created_at = created_at
    }

    getJsonObject(){
        return {
            network_point_id: this.network_point_id,
            created_at:this.created_at,
            result: this.result
        }
    }
}

module.exports = PingEvent