const PingEvent = require("../models/PingEvent");

const faker = {
    fakePingEvent: (network_point)=>{
        let pe = new PingEvent()
        let result = Math.random()
        if (result > 0.93) result = null
        pe.setValues(result, network_point.id, new Date())
        return pe
    }
}

module.exports = faker