var form = require('formidable')
var b = require('http')
var fs = require('fs')
b.createServer((req,res)=>{
	if(req.url =='/upload'){
		var formes = new form.IncomingForm()
		formes.parse(req,(err,field,files)=>{
			var oldpath = files.uploaded.filepath
			var newpath = "/Users/abbasmurudkar/Desktop/CODINGS/NODE" + files.uploaded.originalFilename
			fs.rename(oldpath,newpath,(err)=>{
				if (err) throw err
					res.write("file has been moved successfully")
				res.end()
			})
		})
	}
	else{
	res.writeHead(200,{'Content-Type':'text/html'})
	res.write("<form method='post' action='upload' enctype='multipart/form-data'>")
	res.write("<input type ='file' name='uploaded' value='choose'><br>")
	res.write("<input type = 'submit' name='submit' value='click'>" )
	res.write("</form>")
	res.end()
}
}).listen(8080)