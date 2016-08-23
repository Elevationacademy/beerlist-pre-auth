app.factory('auth', ['$http', function($http){
  
  var auth = {}; //empty object

  auth.register = function(user){
     return $http.post('/register', user);
    };

  auth.login = function(user) {
    return $http.post('/login', user);
  }

  // current user request
  auth.currentUser = null;

  auth.getCurrentUser = function() {

  return $http.get('/currentUser').then(function(response) {
    auth.setCurrentUser(response.data.username);
  });
}

  return auth;

}]);