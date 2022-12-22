const knex = require("../database/database")
const Model = require("./Model")
const PingEvent = require("./PingEvent")

class NetworkPoint extends Model {
  ip
  fqdn
  name
  created_at
  updated_at
  deleted_at
  fillable = ["fqdn", "name", "ip_address"]
  fields = [
    "fqdn",
    "name",
    "ip_address",
    "nwp_role_id",
    "cluster_id",
    "created_by",
    "created_at",
    "updated_at",
    "deleted_at",
  ]
  table = "network_points"

  constructor() {
    super()
  }

  async listEager(res) {
    let result = await knex.select().from(this.table).where("deleted_at", null)
    result = await result.map((r) => ({ ...r }))

    result = await Promise.all(
      result.map(async (item) => {
        let ping_event = await new PingEvent().find({
          nwpoint_id: item.id,
          limit: 15,
        })
        // console.log("🚀 ~ file: NetworkPoint.js ~ line 45 ~ NetworkPoint ~ letping_event=awaitnewPingEvent ~ ping_event", ping_event)
        ping_event = await ping_event.map((pe) => ({ ...pe }))
        item["pingEvents"] = ping_event.map((pe) => {
          return pe
        })
        // console.log("🚀 ~ file: NetworkPoint.js ~ line 50 ~ NetworkPoint ~ result=result.map ~ item", item)
        return await item
      })
    )
    // result = await result.map(async (item)=>{

    // })
    console.log(
      "🚀 ~ file: NetworkPoint.js ~ line 38 ~ NetworkPoint ~ listEager ~ result",
      await result
    )
    return await result
  }
}

module.exports = NetworkPoint
