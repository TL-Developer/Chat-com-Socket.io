var http = require('http'),
	app = require('./config/express')(),
	server = http.createServer(app),
	io = require('socket.io').listen(server);

server.listen(3000);

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
		io.sockets.emit('new message', data);
	});
});