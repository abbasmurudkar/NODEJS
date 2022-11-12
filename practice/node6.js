var http = require('http')
var fs = require('fs')

http.createServer((req,res)=>{
	data = "Hello How Are You"
	res.writeHead(200,{'Content-Type':'text/html'})
	fs.writeFileSync('text.txt',data)

	var text = fs.readFileSync('text.txt','utf-8')
	var re = text.replace("Hello","Hey")
	var upper = text.toUpperCase()
	var sli = text.slice(1,7)
	res.write(text+'\n')
	res.write(re)
	res.write(upper)
	res.write(sli)
	res.end()
}).listen(8080)