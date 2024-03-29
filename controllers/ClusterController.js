const Cluster = require("../models/Cluster")
const Controller = require("./Controller")

class ClusterController extends Controller {
  static async create(req, res) {
    let cluster = new Cluster();
    cluster.setValues();
    cluster
      .save()
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => {
        res.status(400)
        return res.json(err)
      });
  }

  static async get(req, res) {
    new Cluster().get(req.params.id)
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
    if (req.query.cluster_id) {
      new Cluster().find(req.query)
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
      new Cluster().list().then((data) => {
        return res.json(data);
      });
    }
  }

  static async delete(req, res) {}

  static async update(req, res) {}
}

module.exports = ClusterController