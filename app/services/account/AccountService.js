
    "use strict";

    angular.module('myApp.accService',['ngRoute'])

        .factory('AccountService', AccountService);

    AccountService.$inject = ['$http']

    function AccountService($http){
        return {
            loadFleetView : loadFleetView
        };

        function loadFleetView(){

            var config = new {
              headers:{'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3B2c21nbXQuZGV2LnN1bnBvd2VyLmNvbS8iLCJzdWIiOiJsYXRlcm1pY2FAdGVzdC5jb20iLCJleHAiOjE0NzUwNDY3ODMsImlhdCI6MTQ1OTQ5NDc4Mywic3AtZm4iOiJsYSB0ZXJtaWNhIiwic3AtdXQiOiJJbnN0YWxsZXIifQ.dIBIj0V3J0P2fbZxKXmI81o2wKXN2rVxNhmSTR3odFQ'}
            };

            $http.get('https://stg-pvsmgmt.test.sunpower.com/PvsMgmtAPI/api/v2/account/Addresses?uncommissioned=false',config).success(function(data){
                return data;
            })

        }
    }
