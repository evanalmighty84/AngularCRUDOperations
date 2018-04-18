var express = require ('express');
var app = express ();
var mongojs = require('mongojs');
var db = mongojs('vivify' , ['vivify']);
var bodyParser = require ('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/vivify",function (req,res){
	console.log("I received a get request")

	db.contactlist.find(function (err,docs){
console.log(docs);
res.json(docs);

	});

});

app.post('/vivify', function(req, res){
	console.log(req.body);
	db.vivify.insert(req.body, function(err,doc){
		res.json(doc);
	})
});

app.delete('/vivify/:id', function (req, res){
var id = req.params.id;
console.log(id);
db.vivify.remove({_id: mongojs.ObjectId(id)}, function (err,doc){

	res.json(doc);
})

});

app.get('/vivify/:id', function (req, res){

	var id = req.params.id;
	console.log(id);
	db.vivify.findOne({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
	});
});

app.put('/vivify/:id', function(req, res){
var id = req.params.id;
console.log(req.body.name);
db.vivify.findAndModify({query:{_id: mongojs.ObjectId(id)},
	update: {$set : {name: req.body.name, email : req.body.email, number :req.body.number}},
	new: true }, function (err, doc) {
		res.json(doc);
	

});

});

// test data not using real database just server responses person1 = {
// name: 'Tim',
// email:'tim@gmail.com',
// number: '(111)111-1111',
// };
// person2 = {
// 	name: 'Emily',
// 	email:'emily@gmail.com',
// 	number: '(222)222-2222'
// };

// person3 = {
// 	name:'john',
// 	email:'john@email.com',
//     number:'(333) 333-3333'
// 	};
// 	var vivify = [person1, person2, person3];
// 	res.json(vivify);
// });



app.listen(3000)
console.log("server running on port 3000");

