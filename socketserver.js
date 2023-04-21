const { Server } = require("socket.io")
class SocketServer {
    io
    key
    value
    sockets = []
    sendMessage = null
    constructor(httpServer, options) {
        this.io = new Server(httpServer, options)
        this.io.on("connection", (socket) => {
            this.sockets.push(socket)
            this.sendMessage = async (key, value) => {
                this.io.emit(key, value)
            }
        })
    }

    setMessage(key, value) {
        const interval = setInterval(() => {
            if (this.sendMessage) {
                this.sendMessage(key, value)
                clearInterval(interval)
            }
        }, 5)
    }
}

module.exports = SocketServer
