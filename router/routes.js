const PingEventsHelper = require("../helpers/PingEventsHelper")
const NetworkPoint = require("../models/NetworkPoint")
const PingEvent = require("../models/PingEvent")

const route = (app) =>{
    app.get('/api/ping_events/', (req, res)=> {
        console.log(`requisition asked, ${PingEventsHelper.cache}`)
        return res.json(PingEventsHelper.cache)
    })
    app.get('/api/ping_events/:id/', (req, res)=>{
        PingEvent.get(req.params.id).then(result=>{
            if (typeof result=='undefined' || result == null){
                throw('There are no result!')
            }
            return res.json(result)
        })
        .catch(error=>{
            res.status(400)
            return res.json(error)
        })
    })
    app.post('/api/ping_events/', (req, res)=>{
        let pe = new PingEvent()
        pe.setValues(req.body.result,req.body.network_point_id,new Date())
        pe.save().then(result=>{
            return res.json(result)
        })
        .catch(err=>console.error(err))
    })

    app.get('/api/network_points/', (req, res)=>{
        NetworkPoint.list().then(result=>{
            return res.json(result)
        })
    })
    app.get('/api/network_points/:id/', (req, res)=>{
        NetworkPoint.get(req.params.id).then(result=>{
            if (typeof result=='undefined' || result == null){
                throw('There are no result!')
            }
            return res.json(result)
        })
        .catch(error=>{
            res.status(400)
            return res.json(error)
        })
    })
}

module.exports = route