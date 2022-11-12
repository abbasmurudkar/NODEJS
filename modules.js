var http = require('http')
var uc = require('upper-case')
var fs = require('fs')

const server = http.createServer((req,res)=>{
   fs.readFile('txt.txt',(err,data)=>{
    if(err){
        throw err
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(uc.upperCase(data.toString()))
        res.end()
    }
   })
  
})
server.listen(8080,(err)=>{
    console.log(err)
})
