var http = require('http')
var fs = require('fs')

http.createServer((req,res)=>{
    fs.readFile('first.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        if(err){
            res.write(err)
        }
        else{
            res.write(data)
            res.end()
        }
    })

}).listen(8081)