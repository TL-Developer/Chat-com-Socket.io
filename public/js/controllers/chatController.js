angular.module('chat').controller('chatController', function($scope){

	var cores = ['alert alert-info', 'alert alert-success', 'alert alert-warning', 'alert alert-danger'],
		coresIncrement = 0;
		socket = io.connect(),
		$messageBox = $('#message'),
		$chat = $('#chat');

	$scope.sendMessage = function(){
		coresIncrement++;
		if(coresIncrement == 3){
			coresIncrement = 0;
		}
		socket.emit('send message', $messageBox.val());
		$messageBox.val('');
	};

	$scope.class = "closed";

	$scope.openStatusPerfil = function(){
		if ($scope.class === "closed"){
            $scope.class = "open";
        }else{
            $scope.class = "closed";
        }
	};

	$scope.classMenu = "openMenu";

	$scope.closeMenu = function(){
		if ($scope.classMenu === "closedMenu"){
            $scope.classMenu = "openMenu";
        }else{
            $scope.classMenu = "closedMenu";
        }
	};

	socket.on('new message', function(data){
		$chat.append('<div class="'+cores[coresIncrement]+'">'+data+'</div>');
	});
	
});
