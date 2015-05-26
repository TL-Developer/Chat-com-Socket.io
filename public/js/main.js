angular.module('chat', ['ngRoute'])
	.config(function($routeProvider){

		$routeProvider.when('/',{
			templateUrl: 'partials/chat.html',
			controller: 'chatController'
		});

		$routeProvider.otherwise({redirectTo: '/'});
	});