'use strict';

angular.module('myApp.login',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/login',{
       templateUrl:'login/login.html',
       controller: 'LoginController',
       controllerAs: 'login'
    });
}])

.controller('LoginController',LoginController);

LoginController.$inject = ['$scope','$location','$rootScope'];

function LoginController(scope, $location, rootScope){

    var login = scope;
    login.superUserName;
    login.superPassword;
    login.validationError = false;
    login.showToolTip = false;

    //---------------- Mock Password -----------------
    var validPassword = 'padfoot';

    login.validateLogin = function(){
      if(login.superPassword === validPassword){
        localStorage.setItem('isLoggedIn',true);
        rootScope.showLogOutButton = true;
        $location.path('/menu');
      }else{
        login.validationError = true;             //show error message when validation fails
      }
    };

    login.loginInputChanged = function(){
      login.validationError = false;             //hide error message once user starts changing username or Password
    };

    login.forgotPassword = function(){
      login.showToolTip = true;
    };

    login.hideToolTipMessage = function(){
      login.showToolTip = false;
    }


};
