var http = require('http')
var url = require('url')
var domain = 'http://localhost:8080/default.htm?year=2017&month=february';

a = http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/html'})
	var q = url.parse(domain,true)
	console.log(q.pathname)
	console.log(q.host)
	console.log(q.birthtime)
	var subs = q.query
	res.write(subs.month)
	res.write(subs.year)
	res.end()
})
a.listen(8080,(err)=>{
console.log(err)
})