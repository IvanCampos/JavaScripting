(function() {
    
var HomeController = function ($scope, repoService){
    
    $scope.sortBy = 'watchers';
    $scope.reverse = true;
    
    function init(){
        
        repoService.getTopRepos()
            .success(function (data) {
                $scope.repos = data;
            })
            .error(function (data, status, headers, config){
                //Error Handler
            });
    }
    
    init();
    
    $scope.doSort = function(propName){
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    };
    
};    
    
angular.module('demoApp').controller('HomeController', ['$scope', 'repoService', HomeController]);
                                       
}());