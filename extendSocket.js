module.exports = function(socket){
	socket.getId = function(){
		return socket.client.id;
	}
	socket.getRoom = function(){
		var rooms = socket.getRooms();
		var found;
		for(var i=0; i<rooms.length && !found; i++){
			if(rooms[i] !== socket.getId()){
				found = rooms[i];
			}
		}
		if(found){
			console.log("Room found:")
			console.log(found)
		}else{
			console.log("Room not found");
		}
		return found;
	}
	socket.getRooms = function(){
		var rooms = socket.rooms;
		console.log("Get rooms");
		console.log(rooms);
		return rooms;
	}
	socket.leaveAllRooms = function(){
		var rooms = socket.getRooms();
		console.log("Leaving rooms:");
		console.log(rooms);
		for(var i=0; i<rooms.length; i++){
			socket.leave(rooms[i]);
		}
	}
}