var express = require('express');
var app = express();


app.get('/', function(req, res){
	console.log("hola")
  res.send('hello world');
});

app.listen(3000);