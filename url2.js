var http = require('http')
var url = require('url')
var addr = 'localhost:8080/year="2017"month="2310"s'
var q = url.parse(addr,true)

console.log(q.host)
console.log(q.pathname)
console.log(q.search)
