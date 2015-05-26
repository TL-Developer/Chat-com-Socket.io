angular.module('chat').controller('chatController', function($scope){

	var cores = ['alert alert-info', 'alert alert-success', 'alert alert-warning', 'alert alert-danger'],
		coresIncrement = 0;

	$(function(){
		var socket = io.connect();
		var $messageForm = $('#send-message');
		var $messageBox = $('#message');
		var $chat = $('#chat');

		$messageForm.submit(function(e){
			e.preventDefault();
			coresIncrement++;
			if(coresIncrement == 3){
				coresIncrement = 0;
			}
			socket.emit('send message', $messageBox.val());
			$messageBox.val('');
		});

		socket.on('new message', function(data){
			$chat.append('<div class="'+cores[coresIncrement]+'">'+data+'</div>');
		});
	});
	
});
