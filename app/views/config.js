/**
 * Created by OmPrakashSharma on 27-04-2017.
 */
angular.module('meanApp')
    .config(['$httpProvider', '$stateProvider', '$urlRouterProvider',
    function ($httpProvider, $stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('home', {
                url: "/",
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })

            .state('list', {
                url: "/list",
                templateUrl: 'views/user-info.html',
                controller: 'userCtrl'
            })

        $urlRouterProvider.otherwise("/");

    }]);