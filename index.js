var express = require('express');
var bodyParser = require('body-parser');
var app = express();

	app.use(bodyParser.json());

var movies = [
	{
		id:1,
		title: "Master & Commander",
		description: "Adventure on the high seas",
		rating:10
	},
	{
		id:2,
		title: "Jurassic Park",
		description: "Dinosuar Fun",
		rating: 10
	}
]

app.get('api/movies' , function (req,res){
	res.status(200).jason(movies);
})
app.get('/api/movie/:id', function (req, res){
	var movie;

	for (var i=0;i < movies.length; i++){
		if (movies[i].id == req.params.id){
			movie = movies[i];
		}
	}

	if(!movie) {
		return res.status(404).send('Movie not found!');
	}else{
		return res.status(200).jason(movie);
	}
})


app.post('/api/movies' , function (req,res){
	var newMovie = req.body;

	movies.push(newMovie);

	res.status(200).send('pushed to Movie[] sucessfully')
})

app.put('/api/movies:id', function (req,res){
	var update = req.body;

	for(var i=0; i< movies.length; i++){
		if (movies[i].id == req.params.id){
			Object.assign(moives[i], update);
		}
	}
})

app.delete('/api/movies:id', function (req,res){
	var delete.body


})





app.listen(3000,function(){
	console.log("Listening on port 3000")
});
