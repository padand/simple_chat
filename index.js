var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
require('./extendSocketio')(io);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	require('./extendSocket')(socket);

	socket.on('joinRoom', function(name){
		console.log('JOIN ROOM');
		if(name){
			socket.leaveAllRooms();
			socket.join(name, function(){
				console.log("Now in room:");
				console.log(socket.getRoom());
				var roomHistory = io.history.getMessages(name);
				socket.emit('joinedRoom', roomHistory);
			});
		}else{
			socket.emit('oops', 'You must enter room name');
		}
	});

  socket.on('message', function(msg){
  	console.log('MESSAGE');
  	var room = socket.getRoom();
  	if(room){
  		io.history.appendMessage(room, msg);
    	socket.broadcast.to(room).emit('message', msg);
    	socket.emit('message', msg);
  	}else{
  		socket.emit('oops', 'You are not in any room');
  	}
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
