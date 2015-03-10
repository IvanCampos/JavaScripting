(function () {
    var repoService = function ($http){
        
        //Get Top 30 Repositories by Language
        this.getTopRepos = function(){
            return $http.get('https://api.github.com/search/repositories?q=language:javascript');
        }
        
        //Get All Repositories by Login Name
        this.getLoginRepos = function(login){
            return $http.get('https://api.github.com/users/'+login+'/repos');
        }
    };
    
    angular.module('demoApp').service('repoService', ['$http', repoService]);
    
}());