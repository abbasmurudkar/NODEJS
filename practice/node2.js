var htt = require('http')
var url = require('url')

htt.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/html'})
	var q = url.parse(req.url,true).query
	var text = 'year'+q.year + 'month'+q.month
	res.end(text)
}).listen(8080)