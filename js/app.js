	var app = angular.module('jobApp', []);
	app.directive('jobTemp', function() {
		return {
			restrict:'E',
			templateUrl:'directives/jobs.html'
		}
	});
	app.controller('JobController', function($scope, $http) {
		$scope.title = "USA Jobs Working For America";
		$scope.jobs = [];
		$scope.init = function() {
			var url = 'http://api.usa.gov/jobs/search.json?callback=JSON_CALLBACK';

			$http.jsonp(url).success(function(data){
                var jobinfo = data;
                console.log(jobinfo);
				angular.forEach(jobinfo, function(value, index){
					$scope.jobs.push(value);
				});
			}).error(function(error){
				console.log("failed")
			});
		};

	});