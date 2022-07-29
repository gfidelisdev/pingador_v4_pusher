const PingEvent = require("../models/PingEvent");
const Controller = require("./Controller");

class PingEventController extends Controller {
  static async create(req, res) {
    let pe = new PingEvent();
    pe.setValues({ ...req.body, created_at: new Date() });
    pe.save()
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => {
          res.status(400);
          return res.json(error);
        });
  }

  static async get(req, res) {}

  /*
  * Get a list of network points, by given parameters
  * req.query: {
  *   nwpoint_id: #the network point id the ping event belongs to
  *   limit: #the limit of results given
  * }
  * 
  * If no parameters are given, it returns 500 code, canceling the
  * request because there are too many results for this query
  */
  static async list(req, res) {
    if (req.query.nwpoint_id) {
      new PingEvent().find(req.query)
        .then((data) => {
          if (typeof data == "undefined" || data == null) {
            throw "There are no data!";
          }
          return res.json(data.reverse());
        })
        .catch((error) => {
          res.status(400);
          return res.json(error);
        });
    } else {
      res.status(500)
      res.json({data:{
        info:'There are too many results for this query!'
      }})
    }
  }

  static async listByCriteria(req, res) {}

  static async delete(req, res) {}

  static async update(req, res) {}
}

module.exports = PingEventController;
