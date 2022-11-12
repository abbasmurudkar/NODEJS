var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost:8080",
  user: "root",
  password: "a1b2b3a4s5"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});