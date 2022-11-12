var http = require('http');
var url = require('url');
var fs = require('fs');
var domain= "localhost:8080/year=600&month=900"
http.createServer(function (req, res) {
  var q = url.parse(domain, true).query;
  var filename = "first.html";
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log(q.pathname)
    return res.end();
  });
}).listen(8080);
