const comm = {
    start: (server, options)=>{
        var io = require('socket.io')(server, options)

        io.on('connection', socket=>{
            sendMessage = (key, message)=>{
                io.emit(key,message)
            }
            module.exports = {sendMessage}
        })
    }
}

console.log(this.sendMessage)
module.exports = {comm}