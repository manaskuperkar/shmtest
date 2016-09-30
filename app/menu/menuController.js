'use strict';

//const sql = require('mssql');

angular.module('myApp.menu',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/menu',{
        templateUrl: 'menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'menu',
    });
}])


.controller('MenuController',MenuController);

    MenuController.$inject = ['$scope','$http','$location','$rootScope'];

    function MenuController(scope,$http,$location,rootScope){

      //-------------First, check if user is logged in. If yes, then continue, otherwise reroute to login screen. This code must be called at the start of every page controller.
        if(!JSON.parse(localStorage.getItem('isLoggedIn'))){
          $location.path('/login');
          rootScope.showLogOutButton = false;
        }else{
          rootScope.showLogOutButton = true;
        }

        //---------Initialize variables--------------------
        var menu = scope;
        menu.showLoadingBar = false;
        menu.showFleetTable = false;
        menu.showSwordEffect = false;



        //---------------MOCK DATA-------------------------
        //Creating mock menu data which will populate the Menu on the page
        menu.parentMenu = [{"name":"List","parentId":"1"},
                           {"name":"The Real Heroes","parentId":"2"},
                           {"name":"F.M.A ","parentId":"3"},
                           {"name":"S.A.O","parentId":"4"},
                           {"name":"Death Note","parentId":"5"},
                           {"name":"Dragon Ball Z","parentId":"6"},
                           {"name":"Marvel","parentId":"7"},
                           {"name":"D.C","parentId":"8"},
                           {"name":"Naruto","parentId":"9"},
                           {"name":"Thinking","parentId":"10"}];


        menu.listChildMenu = [{"name":"SUPERMAN","id":"1"},
                            {"name":"BATMAN","id":"2"},
                            {"name":"SPIDERMAN","id":"3"},
                            {"name":"THOR","id":"4"},
                            {"name":"IRONMAN","id":"5"}];

        menu.realHeroesChildMenu = [{
                            	"name": "Goku",
                            	"id": "1"
                            }, {
                            	"name": "Vegeta ",
                            	"id ": "2"
                            }, {
                            	"name": "Edward Elric",
                            	"id": "3"
                            }, {
                            	"name": "Kirito",
                            	"id": "4"
                            }, {
                            	"name": "Itachi Uchiha",
                            	"id": "5"
                            }];
          menu.FMAChildMenu = [{"name":"Edward Elric","id":"1"},
                              {"name":"Alphonse Elric","id":"2"},
                              {"name":"Roy Mustang","id":"3"},
                              {"name":"Winry Rockbell","id":"4"},
                              {"name":"Scar","id":"5"}];
          menu.SAOChildMenu = [{"name":"Kirito","id":"1"},
                              {"name":"Asuna","id":"2"},
                              {"name":"Yui","id":"3"}];
          menu.deathnoteChildMenu = [{"name":"Light Yagami","id":"1"},
                              {"name":"L","id":"2"},
                              {"name":"Misa Amane","id":"3"},
                              {"name":"Ryuk","id":"4"},
                              {"name":"Touta Matsuda","id":"5"}];
          menu.dbzChildMenu = [{"name":"Goku","id":"1"},
                              {"name":"Vegeta","id":"2"},
                              {"name":"Gohan","id":"3"},
                              {"name":"Trunks","id":"4"},
                              {"name":"Piccolo","id":"5"}];
        menu.marvelChildMenu = [{"name":"Deadpool","id":"1"},
                              {"name":"Ironman","id":"2"},
                              {"name":"Hulk","id":"3"},
                              {"name":"Wolverine","id":"4"},
                              {"name":"SpiderMan","id":"5"}];
         menu.DCChildMenu = [{"name":"Superman","id":"1"},
                               {"name":"Batman","id":"2"},
                               {"name":"Joker","id":"3"},
                               {"name":"Arrow","id":"4"},
                               {"name":"Flash","id":"5"}];
          menu.narutoChildMenu = [{"name":"Naruto Uzumaki","id":"1"},
                                {"name":"Sasuke Uchiha","id":"2"},
                                {"name":"Itachi Uchiha","id":"3"},
                                {"name":"Kakashi Hatake","id":"4"},
                                {"name":"Sakura Hurano","id":"5"}];

        //-------------------------MOCK DATA END--------------------------



       //----------------------------Logic on page load---------------------------------

        for(var index in menu.parentMenu){
          var parent = menu.parentMenu[index];         //looping through the parentMenuList -- so that we can add the corresponding childMenu for each parent menu
          if(parent.parentId === '1'){
            parent.childList = menu.listChildMenu;
          }
          if(parent.parentId === '2'){
            parent.childList = menu.realHeroesChildMenu;
          }
          if(parent.parentId === '3'){
            parent.childList = menu.FMAChildMenu;
          }
          if(parent.parentId === '4'){
            parent.childList = menu.SAOChildMenu;
          }
          if(parent.parentId === '5'){
            parent.childList = menu.deathnoteChildMenu;
          }
          if(parent.parentId === '6'){
            parent.childList = menu.dbzChildMenu;
          }
          if(parent.parentId === '7'){
            parent.childList = menu.marvelChildMenu;
          }
          if(parent.parentId === '8'){
            parent.childList = menu.DCChildMenu;
          }
          if(parent.parentId === '9'){
            parent.childList = menu.narutoChildMenu;
          }
          parent.showChildList = false;
        };


        //-----------------Page Load Logic End--------------------------


        //--------------------Handle User Events--------------------------
        menu.showChildMenu = function showAccMenu(currentParentId){
                for(var index in menu.parentMenu){
                  var parent = menu.parentMenu[index];
                  if(parent.parentId === currentParentId){             //Show child menu of the current selected parent
                    parent.showChildList = true;
                  }
                }
        };

        menu.hideChildMenu = function hideAccMenu(currentParentId){
          for(var index in menu.parentMenu){
            var parent = menu.parentMenu[index];
            if(parent.parentId === currentParentId){             //Hide child menu of the current selected parent
              parent.showChildList = false;
            }
          }
        };

       menu.clearTextArea = function clearTextData(){
            menu.fleetView = null;
            menu.showFleetTable = false;
        };
};
