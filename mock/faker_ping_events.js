const PingEvent = require("../models/PingEvent");

const faker = {
    fakePingEvent: (network_point)=>{
        let pe = new PingEvent()
        pe.setValues(Math.random(), network_point.id, new Date())
        return pe
    }
}

module.exports = faker