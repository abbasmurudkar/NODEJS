var events = require('events')
var emitter = new events.EventEmitter()

const myfunt = () =>{
    console.log("HELLO CHUTYA")
}
emitter.on('churan',myfunt)

emitter.emit('churan')

