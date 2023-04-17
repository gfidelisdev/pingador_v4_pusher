const PingEventsHelper = require("../helpers/PingEventsHelper");
const Cluster = require("../models/Cluster");
const NetworkPoint = require("../models/NetworkPoint");
const PingEvent = require("../models/PingEvent");
const PingEventController = require("../controllers/PingEventController");
const NetworkPointController = require("../controllers/NetworkPointController");

const route = (app) => {
  /**
   * @params {
   *         nwpoint_id: #the network point id the ping event belongs to
   *         limit: #the limit of results given
   *       }
   */
  app.get("/api/ping_events/", PingEventController.list);
  // app.get('/api/ping_events/', (req, res)=> {
  //     console.log(`requisition asked, ${PingEventsHelper.cache}`)
  //     return res.json(PingEventsHelper.cache)
  // })

  app.get("/api/ping_events/:id/", (req, res) => {
    PingEvent.get(req.params.id)
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
  });

  app.get("/api/ping_events/network_point/:nwpoint_id/:limit", (req, res) => {
    console.log("🚀 ~ file: routes.js:36 ~ app.get ~ req:", req.params);
    PingEventController.listByCriteria(req, res);
  });

  /**
   * @params {
   *      result: #the result of the ping sent
   *      nwpoint_id: #the network point referenced
   * }
   */
  app.post("/api/ping_events/", PingEventController.create);

  /**
   * @params (optional) {
   *      cluster_id: #the cluster to filter the results - only network points from that cluster must be shown
   * }
   *
   * If no params are provided, return all network points stored in database
   */
  app.get("/api/network_points/eager", NetworkPointController.listEager);
  app.get("/api/network_points/", NetworkPointController.list);
  app.get("/api/network_points/:id/", NetworkPointController.get);
  app.post("/api/network_points", NetworkPointController.create);

  app.get("/api/clusters", (req, res) => {
    new Cluster().list().then((data) => {
      return res.json(data);
    });
  });
};

module.exports = route;
