const {socketConnection} = require('./comm')


// console.log('------------------------------')
// console.log(ss)
// console.log('------------------------------')
// let i = 1
// ss.setMessage('msg',`envio 1`)
// ss.setMessage('msg',`envio 2`)
// ss.setMessage('msg',`envio 3`)
// ss.setMessage('msg',`envio 4`)
// ss.setMessage('msg',`envio 5`)
// ss.setMessage('msg',`envio 26`)
// setInterval(()=>{
//   ss.setMessage('msg',`envio ${i}`)
//   console.log(i)
//   i = i+1
// }, 200)
// const {comm, sendMessage} = require('./comm')

// comm.start(http,options)
// sendMessage('msg', 'hoje')

// socketConnection(http,{
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   }
// })

// const {enviarMensagem} = require('./tasks/scan_network')
// enviarMensagem('msg','mesc')

// let io = require('socket.io')(http, {
//       cors: {
//         origin: "*",
//         methods: ["GET", "POST"]
//       }
//     })

// io.emit('msg','msg')

// var io = require('socket.io')(http, {
//     cors: {
//       origin: "*",
//       methods: ["GET", "POST"]
//     }
//   })
// io.on('connection', (socket)=>{
//     socket.emit('connection', 'you are connected!')
//     socket.on('nuevo', msg=>{
//         console.log(msg)
//     })
//     io.emit('msg','mlllk')
// })
// console.log('sockets\n',io.Server)

// const conexion = require('./comm')
// conexion(io)



// Scanner.scanRange('10.4.0.1','10.4.1.1')

// mock_pes = require('./mock/mock_ping_events')
// mock_nws = require('./mock/mock_network_points')




// sendPings(mock_nws)

// let pe = new PingEvent()
// console.log(new Date())
// pe.setValues(0.3,1,new Date())
// pe.save()

// let nwp = NetworkPoint.list()
// nwp.then(nwps=>console.log(nwps))*/