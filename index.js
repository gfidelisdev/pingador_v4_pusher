var app = require('express')()
var env = require('./.env')
var cors = require('cors')
const PingEvents = require('./models/PingEvents')
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
    console.log(`new client connected`)
    socket.emit('connection', 'you are connected!')
    socket.on('nuevo', msg=>{
        console.log(msg)
    })
})

let pe = new PingEvents()
pe["event"] = 12
pe["server"]=1

pe.save()