(function() {
    //start of function
  var app = angular.module('headerparser', []);

app.controller('MainCtrl', ['$scope', '$http', '$window', function($scope, $http, $window){
	$scope.headerdata;
	$scope.getHeader = function(){
		$http.post($window.location.href+"api/whoami/").success(function(data){console.log(data);$scope.headerdata=data;}).error(function(err){throw err;});
	};
}]);//end of controller
  //end of function
})();
