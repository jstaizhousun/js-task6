var app = angular.module("myApp",["ngRoute"])
app.config(["$routeProvider",function($routeProvider){
	$routeProvider
		.when("/",{
			templateUrl:"article-welcome.html"
		})
		.when("/u/list",{
			templateUrl:"article-list.html"
		})
		.when("/u/deal",{
			templateUrl:"article-deal.html"
		})

}])