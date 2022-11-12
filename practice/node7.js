var event = require('events')
var ev = new event.EventEmitter()

const funt= ()=>{
	console.log("HELLO")
}
ev.on('churan',funt)
ev.emit('churan')