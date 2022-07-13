var app = require('express')()
var env = require('./.env')
var cors = require('cors')
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

// app.get('/', (req, response)=>{
//     response.setHeader('Access-Control-Allow-Origin', req.header.origin);
// response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
// response.setHeader('Access-Control-Max-Age', 2592000); // 
//     response.send('ok')
// })

io.on('connection', (socket)=>{
    console.log(`new client connected`)
    socket.emit('connection', null)
    socket.on('nuevo', msg=>{
        console.log(msg)
    })
})