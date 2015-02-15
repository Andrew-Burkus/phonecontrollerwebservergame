var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
	console.log("connection established son!");
	socket.on('update', function() {

	});
});

app.use(express.static('public/'));
app.get('/', function(req, res) {
	res.sendfile("public/main.html");
});

var port = process.env.port || 8080;
http.listen(port, function() {
	console.log('Magic Hands on port: ' + port);
});