const PingEventsHelper = require("../helpers/PingEventsHelper")
const NetworkPoint = require("../models/NetworkPoint")
const PingEvent = require("../models/PingEvent")

const route = app =>{
    app.get('/api/ping_events/', (req, res)=> {
        console.log(`requisition asked, ${PingEventsHelper.cache}`)
        return res.json(PingEventsHelper.cache)
    })
    app.get('/api/ping_events/:id/', (req, res)=>{
        PingEvent.get(req.params.id).then(result=>{
            console.log(result)
            return res.json(result)
        })
    })

    app.get('/api/network_points', (req, res)=>{
        NetworkPoint.list().then(result=>{
            return res.json(result)
        })
    })
}

module.exports = route