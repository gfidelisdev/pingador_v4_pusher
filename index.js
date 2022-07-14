var app = require('express')()
var env = require('./.env')
var cors = require('cors')
var Scanner = require('./tasks/scan_network')

const PingEvents = require('./models/PingEvents')
const PingEventsHelper = require('./helpers/PingEventsHelper')
app.use(cors())
var http = require('http').createServer(app)
var io = require('socket.io')(http, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  })
http.listen(env.PORT,()=>{
    console.log(`listening on PORT ${env.PORT}`)
})

io.on('connection', (socket)=>{
    socket.emit('connection', 'you are connected!')
    socket.on('nuevo', msg=>{
        console.log(msg)
    })
})

let pe = new PingEvents()
pe["event"] = 12
pe["server"]=1

pe.save()

Scanner.scanRange('10.4.0.1','10.4.1.1')

let peh = new PingEventsHelper()
console.log(peh.cache)

peh.pushEvent(pe.getJsonObject())
console.log(peh.cache)