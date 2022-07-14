const Model = require ("./Model")

class PingEvents extends Model {
    constructor(){
        super()
        this.table = 'ping_events'
        this.fillable = [
            'event',
            'server',
            'created_at',
            'result'
        ]
    }
}

module.exports = PingEvents