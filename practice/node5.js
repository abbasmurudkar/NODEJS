var http = require('http')
var fs = require('fs')

http.createServer((req,res)=>{
	fs.readFile('html.html',(err,data)=>{
		res.writeHead(200,{'Content-Type':'text/html'})
		if(err){
			res.write(err)
		}
		else{
			res.write(data)
			res.end()
		}
	})
}).listen(8080)

http.createServer((req,res)=>{
	x = "HELLO GUYS MY NAME IS ABBAS"
	fs.writeFile('txt.txt',x,(err,data)=>{
		if(err){
			throw err
		}
		else{
			console.log('DONE WITH EDIT')
			res.end()
		}
	})
}).listen(8081)

http.createServer((req,res)=>{
	x = "/n MY NAME IS CHUTIYA"
	fs.appendFile('txt.txt',x,(err,data)=>{
		if(err){
			throw err
		}
		else{
			console.log('DONE WITH APPENDING')
			// res.writeHead(200,{'Content-Type':'text/html'})
			// res.read(data)
			res.end()
		}
	})
}).listen(8082)

http.createServer((req,res)=>{
	x = "/n MY NAME IS CHUTIYA"
	fs.open('txt.txt','r',(err,data)=>{
		if(err){
			throw err
		}
		else{
			console.log('OPENED THE FILE IN READ MODE')
			res.writeHead(200,{'Content-Type':'text/html'})
			res.write(toUpperCase((data.toString())))
			res.end()
		}
	})
}).listen(8083)
http.createServer((req,res)=>{
	x = "/n MY NAME IS CHUTIYA"
	fs.unlink('txt.txt',(err,data)=>{
		if(err){
			throw err
		}
		else{
			console.log('FILE DELETED')
			res.end()
		}
	})
}).listen(8084)