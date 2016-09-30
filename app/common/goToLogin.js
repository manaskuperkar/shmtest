(function(){
  "use strict";

  angular.module('myApp').run(goToLogin);

  goToLogin.$inject = ['$rootScope','$location'];

  function goToLogin(rootScope, $location){

    rootScope.logout = function routeToLogin(){
      localStorage.setItem('isLoggedIn',false);
      rootScope.showLogOutButton = false;
      $location.path('/login');
    };
  }

})();
