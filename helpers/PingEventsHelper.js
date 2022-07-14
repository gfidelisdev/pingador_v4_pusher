const PingEvents = require("../models/PingEvents")

class PingEventsHelper {
    cache = []
    ip = ''
    limit
    constructor(limit=20){
        this.limit = limit
        for (let i = 0; i<this.limit; i=i+1){
            let pingEvent = new PingEvents()
            pingEvent.id = 0
            pingEvent.result = null
            pingEvent.server = null
            pingEvent.created_at = null
            this.cache.push(pingEvent.getJsonObject())
        }

    }

    get cache() {
        return this.cache
    }

    pushEvent(pingEvent){
        this.cache.shift()
        this.cache.push(pingEvent)
    }

}

module.exports = PingEventsHelper