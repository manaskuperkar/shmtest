'use strict';

angular.module('myApp.homePage', ['ngRoute'])


    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/homePage', {
            templateUrl: 'home/homePage.html',
            controller: 'HomePageController',
            controllerAs: 'vm',
        });
    }])

    .controller('HomePageController', ['$rootScope','$http',function($rootScope,$http) {
        var vm = $rootScope;
       // var start = onPageLoad();
        $rootScope.showLoadingBar = false;
        $rootScope.showTable = false;
        $rootScope.carId = 0;
        $rootScope.carName = null;
        $rootScope.carCategory = null;
        $rootScope.carPrice = null;


        var url = 'http://localhost:60217/api/manas'
/*

        function onPageLoad() {
            $('#loadingBar').hide();
            $('#carTable').hide();
        };
*/


        $rootScope.find = function(carId) {
            $rootScope.showLoadingBar = true;
            $rootScope.showTable = false;

            $http.get(url + '/GetCarData?carId=' + carId).success(function (response) {
                $rootScope.showLoadingBar = false;
                $rootScope.carName = response.Name;
                $rootScope.carCategory = response.Category;
                $rootScope.carPrice = response.Price;
                $rootScope.showTable = true;
            })
        };


    }]);
