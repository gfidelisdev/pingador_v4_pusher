const Model = require ("./Model")

class PingEvents extends Model {
    event
    server
    created_at
    result
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

    getJsonObject(){
        return {
            event: this.event,
            server: this.server,
            created_at:this.created_at,
            result: this.result
        }
    }
}

module.exports = PingEvents