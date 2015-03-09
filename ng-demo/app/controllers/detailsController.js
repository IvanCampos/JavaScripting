(function() {
    
var DetailsController = function ($scope, $routeParams, repoService){
    
    var login = $routeParams.login;
    
    $scope.sortBy = 'watchers';
    $scope.reverse = true;
    
    function init(){
        
        repoService.getLoginRepos(login)
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
    
angular.module('demoApp').controller('DetailsController', ['$scope', '$routeParams', 'repoService', DetailsController]);
                                       
}());