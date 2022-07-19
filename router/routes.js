const PingEventsHelper = require("../helpers/PingEventsHelper")
const Cluster = require("../models/Cluster")
const NetworkPoint = require("../models/NetworkPoint")
const PingEvent = require("../models/PingEvent")

const route = (app) =>{
    app.get('/api/ping_events/', (req, res)=> {
        console.log(`requisition asked, ${PingEventsHelper.cache}`)
        return res.json(PingEventsHelper.cache)
    })
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
    app.post('/api/ping_events/', (req, res)=>{
        let pe = new PingEvent()
        pe.setValues(req.body.data,req.body.nwpoint_id,new Date())
        pe.save().then(data=>{
            return res.json(data)
        })
        .catch(err=>console.error(err))
    })

    app.get('/api/network_points/', (req, res)=>{
        if (req.query.cluster_id){
            NetworkPoint.find(req.query).then(data=>{
                if (typeof data=='undefined' || data == null){
                    throw('There are no data!')
                }
                return res.json(data)
            })
            .catch(error=>{
            console.log("🚀 ~ file: routes.js ~ line 41 ~ app.get ~ error", error)
                res.status(400)
                return res.json(error)
            })
        }
        else {
            NetworkPoint.list().then(data=>{
            return res.json(data)
            })
        }
    })
    app.get('/api/network_points/:id/', (req, res)=>{
        NetworkPoint.get(req.params.id).then(data=>{
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

    app.get('/api/clusters',(req, res)=>{
        Cluster.list().then(data=>{
            return res.json(data)
        })
    })
}

module.exports = route