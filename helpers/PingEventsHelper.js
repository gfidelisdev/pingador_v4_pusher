const faker = require("../mock/faker_ping_events")
const PingEvents = require("../models/PingEvent")
const interval = 10000

class PingEventsHelper {
    static cache = []
    ip = ""
    limit
    network_points = []
    io = null // io é uma instância da classe Server de socket.io. io.sendMessage é um wrapper que aciona o método emit de Server de socket.io
    constructor(network_points, io, limit = 20) {
        this.limit = limit
        // this.io = io
        for (let i = 0; i < this.limit; i = i + 1) {
            let pingEvent = new PingEvents()
            pingEvent.id = 0
            pingEvent.result = null
            pingEvent.server = null
            pingEvent.created_at = null
            PingEventsHelper.cache.push(pingEvent.getJsonObject())
        }
        this.network_points = network_points
        this.io = io
    }

    static get cache() {
        return PingEventsHelper.cache
    }

    pushEvent(pingEvent) {
        PingEventsHelper.cache.shift()
        PingEventsHelper.cache.push(pingEvent.getJsonObject())
    }

    send_pings() {
        setInterval(() => {
            this.network_points.forEach((network_point) => {
                let pe = faker.fakePingEvent(network_point)
                // console.log("🚀 ~ file: PingEventsHelper.js ~ line 38 ~ PingEventsHelper ~ setInterval ~ pe", pe)
                pe.save()
                    .then((res) => {
                        // console.log(
                        //     `Inserido registro ${res}`,
                        //     `network_point: ${network_point.id}`
                        // )
                        // this.io.sendMessage('msg', `Inserido registro ${res}`, `network_point: ${network_point.id}`)
                        pe.id = res[0]
                        this.pushEvent(pe)
                    })
                    .catch((err) => {
                        console.error(err)
                    })
            })
            if (this.io.sendMessage) {
                this.io.sendMessage("msg", {
                    msg: "Registros inseridos",
                    data: PingEventsHelper.cache,
                })
                console.log("Enviado evento.")
            }
        }, interval)
    }

    send_pings_no_db() {
        let mock_nw = require("../mock/mock_network_points")
        let ping_events = []
        let id = 1
        for (let i = 0; i < mock_nw.length * 10; i++) {
            mock_nw.forEach((network_point) => {
                let pe = faker.fakePingEvent(network_point)
                pe.id = id
                id = id + 1
                console.log(
                    "🚀 ~ file: PingEventsHelper.js:64 ~ PingEventsHelper ~ send_pings_no_db ~ i:",
                    id
                )
                console.log(
                    "🚀 ~ file: PingEventsHelper.js:68 ~ PingEventsHelper ~ mock_nw.forEach ~ pe:",
                    pe
                )

                ping_events.push(pe)
            })
        }
        setInterval(() => {
            mock_nw.forEach((network_point) => {
                let pe = faker.fakePingEvent(network_point)
                pe.id = id
                id = id + 1
                console.log(
                    "🚀 ~ file: PingEventsHelper.js:64 ~ PingEventsHelper ~ send_pings_no_db ~ i:",
                    id
                )
                // console.log("🚀 ~ file: PingEventsHelper.js ~ line 38 ~ PingEventsHelper ~ setInterval ~ pe", pe)
                ping_events.shift()
                ping_events.push(pe)
            })

            console.log(
                "🚀 ~ file: PingEventsHelper.js:63 ~ PingEventsHelper ~ send_pings_no_db ~ ping_events:",
                ping_events
            )
            if (this.io.sendMessage) {
                this.io.sendMessage("msg", `Registros inseridos!`)
            }
        }, interval)
    }
}

module.exports = PingEventsHelper
