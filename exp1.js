var http = require('http');
var html = require('./module')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('THE TIME IS'+html.myDate())
    res.write(req.url)
    res.end("HELLO WORLD");
}).listen(8080)




