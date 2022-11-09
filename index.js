var express = require('express')
var app = express()
var env = require('./.env')
var cors = require('cors')
const PingEventsHelper = require('./helpers/PingEventsHelper')
const NetworkPoint = require('./models/NetworkPoint')
const SocketServer = require('./socketserver')
const route = require('./router/routes')

app.use(cors())
app.use(express.json())

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
  let nwp_list = await new NetworkPoint().list()
  

  nwp_list = nwp_list.map(nwp=>({...nwp}))
  let peh = new PingEventsHelper(nwp_list, socketServer)
  peh.send_pings()
}

startPings()



// setInterval(
//   ()=>console.log(PingEventsHelper.cache)
//   ,60000)

route(app)