app.controller('AuthCtrl', ['$scope', 'auth', '$state', function($scope, auth, $state){

  //new user register
  $scope.register = function () {
    auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };

  // existing user login
  $scope.login = function() {
    auth.login($scope.user).then(function() {
      $state.go('home');
    });
  };

  $scope.getCurrentUser = function() {
    auth.getCurrentUser($scope.user).then(function() {
      $state.go('home');
    });
  };
  
}]);