var app = require('express')()
var env = require('./.env')
var cors = require('cors')
var Scanner = require('./tasks/scan_network')
// var { sendPings} = require('./tasks/send_pings')
const PingEvent = require('./models/PingEvent')
const PingEventsHelper = require('./helpers/PingEventsHelper')
const NetworkPoint = require('./models/NetworkPoint')

app.use(cors())
var http = require('http').createServer(app)


http.listen(env.PORT,()=>{
    console.log(`listening on PORT ${env.PORT}`)
})


var io = require('socket.io')(http, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  })
io.on('connection', (socket)=>{
    socket.emit('connection', 'you are connected!')
    socket.on('nuevo', msg=>{
        console.log(msg)
    })
})



const socket = require('./comm')
console.log(socket)


/*
Scanner.scanRange('10.4.0.1','10.4.1.1')

mock_pes = require('./mock/mock_ping_events')
mock_nws = require('./mock/mock_network_points')

const startPings = async () => {
  let nwp_list = await NetworkPoint.list()
  let peh = new PingEventsHelper(nwp_list, null)
  peh.send_pings()
}
startPings()

// sendPings(mock_nws)

// let pe = new PingEvent()
// console.log(new Date())
// pe.setValues(0.3,1,new Date())
// pe.save()

let nwp = NetworkPoint.list()
// nwp.then(nwps=>console.log(nwps))*/