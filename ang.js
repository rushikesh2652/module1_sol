(function(){
	angular.module('mySol',[])

	.controller('LaunchCheckController',LaunchCheckController);
	MyController.$inject=['$scope'];
	function LaunchCheckController($scope){

		$scope.items="";
		$scope.check=function(){
			var str=$scope.items;
			var msg="";
			var strings=str.split(',');
			if(str=="")
			{
				msg="Please Enter Items!";
			}
			else if(strings.length <=3)
			{
				msg="Enjoy";
			}
			else
			{
				msg="Too Much!";
			}
			$scope.Message=msg;
		};
	};

})();