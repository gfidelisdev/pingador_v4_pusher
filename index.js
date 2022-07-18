var app = require('express')()
var env = require('./.env')
var cors = require('cors')
const PingEventsHelper = require('./helpers/PingEventsHelper')
const NetworkPoint = require('./models/NetworkPoint')
const SocketServer = require('./socketserver')
const route = require('./router/routes')


app.use(cors())
var http = require('http').createServer(app)

http.listen(env.PORT,()=>{
  console.log(`listening on PORT ${env.PORT}`)
})

let options = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
}

let socketServer = new SocketServer(http,options)


const startPings = async () => {
  let nwp_list = await NetworkPoint.list()
  nwp_list = nwp_list.map(nwp=>({...nwp}))
  let peh = new PingEventsHelper(nwp_list, socketServer)
  peh.send_pings()
}
startPings()
setInterval(
  ()=>console.log(PingEventsHelper.cache)
  ,60000)

route(app)