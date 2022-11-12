var fs = require('fs')
var server = require('http')

server.createServer((req,res)=>{
    var data = "hello world"
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.writeFileSync('txt.txt',data)
    var text = fs.readFileSync('txt.txt','utf-8');
    var re = text.replace('hello','\n CHUTIYA')
    res.write(text)
    res.write(re)
    res.end()
}).listen(8080)
