var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
	console.log("connection established son!");
});

var port = process.env.port || 8080;
http.listen(port, function() {
	console.log('Magic Hands on port: ' + port);
})