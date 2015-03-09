(function () {
    var repoService = function ($http){     
        this.getTopRepos = function(){
            return $http.get('https://api.github.com/search/repositories?q=language:javascript');
        }
        
        this.getLoginRepos = function(login){
            return $http.get('https://api.github.com/users/'+login+'/repos');
        }
    };
    
    angular.module('demoApp').service('repoService', ['$http', repoService]);
    
}());