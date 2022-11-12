var sql = require('mysql')

var con = sql.createConnection({
	host:'localhost',
	user:'root',
	password:'a1b2b3a4s5'
})

con.connect((err)=>{
	if (err){throw err}
	else{
		console.log("Connected Successfully")
		con.query("create database mydb",(err,result)=>{
			if(err){throw err}
				else{
					concole.log("CREATE DATABASE db "+result)
				}
		})
		con.query("CREATE TABLE IF NOT EXITS users(id INT PRIMARY KEY,Name VARCHAR)",(err,result)=>{
			if(err){throw err}
				else{
					concole.log("TABLE CREATED "+result)
				}
		})
	}
})