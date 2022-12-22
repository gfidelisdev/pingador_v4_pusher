const NetworkPoint = require("../models/NetworkPoint")
const Controller = require("./Controller")

class NetworkPointController extends Controller {
  static async create(req, res) {
    let nwp = new NetworkPoint();
    nwp.setValues(req.body);
    nwp
      .save()
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        res.status(400);
        return res.json(error);
      });
  }

  static async get(req, res) {
    new NetworkPoint().get(req.params.id)
      .then((data) => {
        if (typeof data == "undefined" || data == null) {
          throw "There are no data!";
        }
        return res.json(data);
      })
      .catch((error) => {
        res.status(400);
        return res.json(error);
      });
  }


  static async list(req, res) {
    // TODO: implements eager loading of last ping_events, according to limit criteria. Check if there is a ping_events: true criteria and the limit.
    // If no limit is provided, uses a default value
    if (req.query.cluster_id) {
      new NetworkPoint().find(req.query)
        .then((data) => {
          if (typeof data == "undefined" || data == null) {
            throw "There are no data!";
          }
          return res.json(data);
        })
        .catch((error) => {
          res.status(400);
          return res.json(error);
        });
    } else {
      new NetworkPoint().list().then((data) => {
        return res.json(data);
      });
    }

  }
  static async listEager(req, res){
    console.log('aqui')
    let result = await new NetworkPoint().listEager(res)
    return res.json(await result)
  }






  static async listByCriteria(req, res) {}

  static async delete(req, res) {}

  static async update(req, res) {}
}

module.exports = NetworkPointController