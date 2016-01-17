(function() {
    //start of function
  var app = angular.module('headerparser', []);

app.controller('MainCtrl', ['$scope', '$http', '$window', function($scope, $http, $window){
	$scope.getHeader = function(){
		var stringJSON = $http.post($window.location.href+"api/whoami/");
		var newWindow = $window.open();
		newWindow.document.write('<p>'+stringJSON+'</p>')
	};
}]);//end of controller
  //end of function
})();
