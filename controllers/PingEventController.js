const PingEvent = require("../models/PingEvent");
const Controller = require("./Controller");

class PingEventController extends Controller {
  static async create(req, res) {
    let pe = new PingEvent();
    pe.setValues({ ...req.body, created_at: new Date() });
    pe.save()
      .then((data) => {
        // console.log(data)
        return res.json(data);
      })
      .catch((err) => console.error(err));
  }

  static async get(req, res) {}
  static async list(req, res) {
    console.log("🚀 ~ file: PingEventController.js ~ line 20 ~ PingEventController ~ list ~ req.query", req.query)
    if (req.query.nwpoint_id) {
      new PingEvent().find(req.query)
        .then((data) => {
          if (typeof data == "undefined" || data == null) {
            throw "There are no data!";
          }
          console.log(data)
          return res.json(data.reverse());
        })
        .catch((error) => {
        //   console.log(            "🚀 ~ file: routes.js ~ line 41 ~ app.get ~ error",            error          );
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
