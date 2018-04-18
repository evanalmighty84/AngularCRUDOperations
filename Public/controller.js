 function AppCtrl($scope, $http) {

 	console.log("hello world from controller");

    var refresh = function(){
 	$http.get('/vivify').success(function(response) {
 		console.log("I got the data I requested");
 		$scope.vivify = response;
 		$scope.contact = "";
 	});
 };

 refresh();

 	$scope.addContact = function(){
console.log($scope.contact);
	$http.post('/vivify', $scope.contact).success(function(response) {
 		console.log(response);
 		refresh();
 	 	});
 	};

 	$scope.remove = function(id){
 		console.log(id);
 		$http.delete('/vivify/' + id).success(function(response){
 			refresh();
 		});
 	};
$scope.edit = function(id) {
	console.log(id);
	$http.get('/vivify/' + id).success(function(response){
		$scope.contact = response;
	});

};
$scope.update = function() {
	console.log($scope.contact._id);
	$http.put('/vivify/' + $scope.contact._id, $scope.contact).success(function(response){
refresh();

	})
	
			};


$scope.deselect = function(){
	$scope.contact = "";
}

 }
 	

