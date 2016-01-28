module.exports = function(io){

	function History(){
		this.history = {};
	}
	History.prototype.getMessages = function(roomName){
		console.log('Get history for ' + roomName);
		return this.history[roomName] || [];
	}
	History.prototype.appendMessage = function(roomName, msg){
		if(!this.history[roomName]){
			this.history[roomName] = [];
		}
		console.log('Append history ' + roomName);
		this.history[roomName].push(msg);
	}

	io.history = new History();
}