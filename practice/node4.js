var http = require('http')
var dt = require('./text')

http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/html'})
	res.write("THE DATE AND TIME IS:- "+dt.myDateTime())
	res.end()
}).listen(8080)