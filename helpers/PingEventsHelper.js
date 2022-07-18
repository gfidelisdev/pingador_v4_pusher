const faker = require("../mock/faker_ping_events")
const PingEvents = require("../models/PingEvent")

class PingEventsHelper {
    static cache = []
    ip = ''
    limit
    network_points = []
    io = null
    constructor(network_points, io, limit=20){
        this.limit = limit
        // this.io = io
        for (let i = 0; i<this.limit; i=i+1){
            let pingEvent = new PingEvents()
            pingEvent.id = 0
            pingEvent.result = null
            pingEvent.server = null
            pingEvent.created_at = null
            PingEventsHelper.cache.push(pingEvent.getJsonObject())
        }
        this.network_points = network_points
        this.io = io
    }

    static get cache() {
        return PingEventsHelper.cache
    }

    pushEvent(pingEvent){
        PingEventsHelper.cache.shift()
        PingEventsHelper.cache.push(pingEvent.getJsonObject())
    }

    send_pings(){
        setInterval(()=>{
            this.network_points.forEach(network_point=>{
                let pe = faker.fakePingEvent(network_point)
                pe.save().then(res=>{
                    console.log(`Inserido registro ${res}`)
                    this.io.sendMessage('msg', `Inserido registro ${res}`)
                    pe.id = res[0]
                    this.pushEvent(pe)
                })
                .catch(err => {

                })
            })
        },60000)
    }


}

module.exports = PingEventsHelper