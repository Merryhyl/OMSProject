/**
 * Created by Administrator on 2016/8/2.
 */
'use strict';

var app = angular.module('app', ['ui.router','qbhttpFactory']).run(
    ['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.ip = "http://127.0.0.1";
            $rootScope.port = "8080";
        }
    ])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('homePage');
//      location.href="#/input/123";

        $stateProvider.state('homePage', {
                controller: 'homePageCtrl',
                url: '/homePage',
                templateUrl: 'pages/homePage.html'
            })
            .state('settingPage', {
                controller: 'settingPageCtrl',
                url: '/settingPage',
                templateUrl: 'pages/settingPage.html'
            })
            .state('settingPage.mystorePage', {
                controller: 'mystorePageCtrl',
                url: '/mystorePage',
                templateUrl: 'pages/mystorePage.html'
            })
            .state('createstorePage', {
               /* controller: 'taobaomaterialCtrl',*/
                url: '/createstorePage',
                templateUrl: 'pages/createstorePage.html'
            })
            .state('settingPage.taobaomaterial', {
                controller: 'taobaomaterialCtrl',
                url: '/taobaomaterial',
                templateUrl: 'pages/taobaomaterial.html'
            })
    }]);
