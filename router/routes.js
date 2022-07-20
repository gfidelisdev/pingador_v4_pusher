const PingEventsHelper = require("../helpers/PingEventsHelper")
const Cluster = require("../models/Cluster")
const NetworkPoint = require("../models/NetworkPoint")
const PingEvent = require("../models/PingEvent")
const PingEventController = require('../controllers/PingEventController')
const NetworkPointController = require("../controllers/NetworkPointController")

const route = (app) =>{
    app.get('/api/ping_events/', PingEventController.list)
    // app.get('/api/ping_events/', (req, res)=> {
    //     console.log(`requisition asked, ${PingEventsHelper.cache}`)
    //     return res.json(PingEventsHelper.cache)
    // })
    app.get('/api/ping_events/:id/', (req, res)=>{
        PingEvent.get(req.params.id).then(data=>{
            if (typeof data=='undefined' || data == null){
                throw('There are no data!')
            }
            return res.json(data)
        })
        .catch(error=>{
            res.status(400)
            return res.json(error)
        })
    })
    app.post('/api/ping_events/', PingEventController.create)

    app.get('/api/network_points/',NetworkPointController.list)
    app.get('/api/network_points/:id/', NetworkPointController.get)

    app.get('/api/clusters',(req, res)=>{
        Cluster.list().then(data=>{
            return res.json(data)
        })
    })
}

module.exports = route