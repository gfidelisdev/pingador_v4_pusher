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
                // console.log("🚀 ~ file: PingEventsHelper.js ~ line 38 ~ PingEventsHelper ~ setInterval ~ pe", pe)
                pe.save().then(res=>{
                    console.log(`Inserido registro ${res}`, `network_point: ${network_point.id}`)
                    // this.io.sendMessage('msg', `Inserido registro ${res}`, `network_point: ${network_point.id}`)
                    pe.id = res[0]
                    this.pushEvent(pe)
                })
                .catch(err => {
                    console.error(err)
                })
            })
            if (this.io.sendMessage){
                this.io.sendMessage('msg', `Registros inseridos!`)
            }
        },60000)
    }


}

module.exports = PingEventsHelper