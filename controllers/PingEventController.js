const PingEvent = require("../models/PingEvent")
const Controller = require("./Controller")

class PingEventController extends Controller {
    static async create(req, res){
        let pe = new PingEvent()
        pe.setValues({...req.body,created_at:new Date()})
        pe.save().then(data=>{
            return res.json(data)
        })
        .catch(err=>console.error(err))
    }

    static async get(req, res){

    }
    static async list(req, res){

    }

    static async listByCriteria(req, res){

    }

    static async delete(req, res){

    }

    static async update(req, res){

    }
}

module.exports = PingEventController