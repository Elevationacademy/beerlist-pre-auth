app.factory('auth', ['$http', '$q', '$rootScope', function($http){
  
  var auth = {}; //empty object


  auth.register = function(user){

     return $http.post('/register', user);
    };


  auth.logIn = function(user){

    return $http.post('/login', user).then(function (response) {
      auth.setCurrentUser(response.data.username);

  }, function(error) {

    return $q.reject(error)
  });
};

  // current user request
  auth.currentUser = null;

  auth.setCurrentUser = function (user) {
    auth.currentUser = user;
    $rootScope.$broadcast("currentUserChange", user);
};


  auth.getCurrentUser = function() {

  return $http.get('/currentUser').then(function(response) {
    auth.setCurrentUser(response.data.username);
  });
}

  return auth;

}]);