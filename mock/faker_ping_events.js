const PingEvent = require("../models/PingEvent");

const faker = {
    fakePingEvent: (network_point)=>{
        let pe = new PingEvent()
        let result = Math.random()
        if (result > 0.93) result = null
        pe.setValues({result, nwpoint_id:network_point.id, created_at: new Date()})
        return pe
    }
}

module.exports = faker