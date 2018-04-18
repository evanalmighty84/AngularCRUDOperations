var express = require ('express');
var app = express();

app.get('/',function(req,res){

	res.send("Hello world from server js")
});

app.listen(4000);
console.log("server running on port 3000");