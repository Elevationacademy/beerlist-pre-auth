app.factory('auth', ['$http', function($http){
  
  var auth = {}; //empty object

  auth.register = function(user){
     return $http.post('/register', user)
    };




  return auth;
  
}]);