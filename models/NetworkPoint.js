const knex = require("../database/database")
const Model = require("./Model")
const PingEvent = require("./PingEvent")
const DEFAULT_LIMIT = 15
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

  async listEager(limit = DEFAULT_LIMIT) {
    let result = await knex.select().from(this.table).where("deleted_at", null)
    result = result.map((r) => ({ ...r }))

    result = await Promise.all(
      result.map(async (item) => {
        let ping_event = await new PingEvent().find({
          nwpoint_id: item.id,
          limit: limit,
        })
        ping_event = await ping_event.map((pe) => ({ ...pe }))
        item["pingEvents"] = await ping_event.map((pe) => {
          return pe
        })
        return item
      })
    )
    return result
  }
}

module.exports = NetworkPoint
