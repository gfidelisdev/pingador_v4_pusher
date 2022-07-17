const {sendPings, ipException} = require("./send_pings")

const Scanner = {
    
    scanRange(initial, final){
        let initialIp = initial.split('.').map(e=>parseInt(e))
        let finalIp = final.split('.').map(e=>parseInt(e))
        if (initialIp.length !== 4 || finalIp.length !== 4){
            throw ipException('ip_format')
        }
    },
}

const enviarMensagem = (key, mensagem) => {
    const { sendMessage } = require('../comm')
    console.log(mensagem)
    sendMessage(key,mensagem) 
}

module.exports = {Scanner, enviarMensagem}