var app = require('express')()
var env = require('./.env')

var http = require('http').createServer(app)
var io = require('socket.io')(http)

http.listen(env.PORT,()=>{
    console.log(`listening on PORT ${env.PORT}`)
})

app.get('/', (req, res)=>{
    res.send('ok')
})

io.on('connection', (socket)=>{
    console.log(`new client connected, ${socket}`)
})