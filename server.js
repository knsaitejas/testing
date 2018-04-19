//modules to import 
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
//create an express app
var app = express();
//allow our app to use / set various technologies and folders
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static( __dirname + '/angularApp/dist' ));

mongoose.connect('mongodb://localhost/quotes');

var quotesSchema = new mongoose.Schema({
	quote: {type: String, minlength: 3},
	author: {type:String, minlength: 1},
	votes: {type:Number, default: 0},
	created_at: {type: Date, default: Date.now },
	updated_at: {type: Date, default: Date.now }
})

mongoose.model('Quote', quotesSchema);
var Quote = mongoose.model('Quote')

mongoose.Promise = global.Promise;

app.get('/quotes', function(req, res){
	Quote.find({}, function(err, quotes){
		res.json(quotes)
	})
})

app.post('/quotes', function(req, res){
	console.log(req.body)
	var quoteInstance = new Quote()
	quoteInstance.quote = req.body.quote.quote
	quoteInstance.author = req.body.quote.author
	console.log(quoteInstance)
	quoteInstance.save(function(err){
		if(err){
			res.json({'error':err})
		} else {
			res.json({'message':'success'})
		}
	})
})

app.delete('/quotes/:id', function(req, res){
	console.log('deleting')
	Quote.remove({_id: req.params.id}, function(err){
		if (err){
			res.json({'error':err})
		} else {
			res.json({'message': 'success'})
		}
	})
})

app.get('/quotes/vote/:id', function(req, res){
	console.log('in the route')
	Quote.findOne({_id: req.params.id}, function(err, quote){
		quote.votes += 1
		quote.save(function(err){
			if (err){
			res.json({'error':err})
		} else {
			res.json({'message': 'success'})
		}
		})
	})
})

app.get('/quotes/devote/:id', function(req, res){
	console.log('in the route')
	Quote.findOne({_id: req.params.id}, function(err, quote){
		quote.votes -= 1
		quote.save(function(err){
			if (err){
			res.json({'error':err})
		} else {
			res.json({'message': 'success'})
		}
		})
	})
})

app.get('/quotes/:id', function(req, res){
	Quote.findOne({_id: req.params.id}, function(err, quote){
		if (err){
			res.json({'error':err})
		} else {
			res.json(quote)
		}
	})
})

app.put('/quotes/:id', function(req, res){
	console.log(req.params.id)
	Quote.findOne({_id: req.params.id}, function(err, quote){
	quote.quote = req.body.quote
	quote.author = req.body.author
	quote.save(function(err){
		if(err){
			res.json({'error': err})
		} else {
			res.json({'message': 'success'})
		}
	})
})
	
})

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/index.html"))
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})



