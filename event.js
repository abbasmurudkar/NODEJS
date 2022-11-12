var fs = require('fs')
var data = 'CHUP BSKD'
var wr = fs.createWriteStream('./output.txt')
wr.write(data)
var rs = fs.createReadStream('./output.txt','utf-8')
rs.on('data',(data)=>{
    console.log('FILE OPENED!')
    console.log(data)
})
// rs.on('close',()=>{
//     console.log('FILE CLOSED')
// })
// rs.on('error',(err)=>{
//     console.log(err.message)
// })
