var htt = require('http')

htt.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/html'})
	res.write("HELLO FROM NODEJS")
	res.write(req.url)
	res.end()
}).listen(8080)
