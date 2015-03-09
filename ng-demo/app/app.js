(function() {
    
   var app = angular.module('demoApp',['ngRoute']); //[] is for dependencies
    
   app.config(function ($routeProvider){
       $routeProvider
           .when('/', {
                controller: 'HomeController',
                templateUrl: 'app/views/home.html'   
           })
           .when('/details/:login', {
                controller: 'DetailsController',
                templateUrl: 'app/views/details.html'   
           })
           .otherwise({redirectTo: '/'});
   });
    
}());
