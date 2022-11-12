var http = require('http')
var event = require('events')
var fs = require('fs')
var url = require('url')
var domain = 'localhost:8080/hello&world'
var emitter = new event.EventEmitter()
var q = url.parse(domain,true)
const server = http.createServer((req,res)=>{
const writter = ()=>{
    let data = "HELLO GAANDU"
    var wr = fs.createWriteStream('NewProject.txt')
    wr.write(data)
    wr.end()
}
emitter.on('WRITEOP',writter)
emitter.emit('WRITEOP')

const Reader = ()=>{
    var rr = fs.createReadStream('NewProject.txt','utf-8')
    rr.on('data',(data)=>{
        res.write(data.toUpperCase())
        res.write(q.pathname)
        console.log("DATA HAS BEEN READED")
        rr.close()
        res.end()
    })
}
emitter.on('READOP',Reader)
emitter.emit('READOP')
})
server.listen(8080,(err)=>{
    console.log(err)
})