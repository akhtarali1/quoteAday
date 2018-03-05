var express = require('express');
var fileSystem = require("fs");
var app = express();
app.use(express.static('./view'))
var text = fileSystem.readFileSync("./files/quotes.txt", "utf-8");
var textByLine = text.split("\n");

app.get('/', function(request, response) {
	var quote = textByLine[Math.floor(Math.random() * textByLine.length)];
	response.render('index.html', {name : quote});
});

var port = process.env.PORT || 8088;
app.listen(port, function() {
	console.log('running on port: ' + port);
})