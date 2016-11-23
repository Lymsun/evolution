/**
 *
 * File: angularRoute.js
 * Author: Lym
 * Created Date: 2016/11/23.
 * Function: angular route function
 *
 */


var app = angular.module('angularRoute', ['ngRoute']);

    app
        .controller('routeController', function ($scope) {})
        .controller('homeController', function ($scope) {
            $scope.hello = "Hello Home!"
        })
        .controller('dashboardController', function ($scope) {
            $scope.hello = "Hello Dashboard!";
        });

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '../view/home.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .when('/dashboard', {
                templateUrl: '../view/dashboard.html',
                controller: 'dashboardController',
                controllerAs: 'dashboard'
            })
            .otherwise({
                redirectTo: '/home'
        });
}]);


