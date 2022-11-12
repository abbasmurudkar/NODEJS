//WRITING THE FILE 
var fs = require('fs')
    fs.writeFile('text.txt','HELLO BSDK CHUTIIYA WORLD!',(err)=>{
        if(err){
            res.write(err)
        }
        else{
            console.log('saxved!')
        }
    })
//APPENDING THE FILE
fs.appendFile('text.txt','HELLO',(err,data)=>{
    if(err){
        throw err
    }
    else{
        console.log('SAVED') 
    }
})
//OPENING THE FILE
 fs.open('another.txt','w+',(err,data)=>{
    if(err){
        throw err
    }
    else{
        data ="hello world"
        fs.write(data.toString())
        console.log("DONE")

    }
})
//CHECKING THE STATUS OF THE FILE
fs.stat('text.txt',(err,status)=>{
    if(err){
        throw err
    }
    else{
        console.log(status) // showing the status of the file
        console.log(status.mode) //showing the mode of the file
        console.log(status.isFile) //showing the file info
        console.log(status.size) // showing the file size
        console.log(status.birthtime) //showing the birthtime
    }
})
//DELETING THE FILE
fs.unlink('txt.txt',(err)=>{
    if(err){
        throw err
    }
    else{
        console.log("FILE HAS BEEN DELETED")
    }
})
//RENAMING THE FILE
fs.rename('text.txt','txt.txt',(err)=>{
    if (err){
        throw err
    }
    else{
        console.log('FILE HAS BEEN RENAMED')
    }
})