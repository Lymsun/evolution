/**
 *
 * File: angularRoute.js
 * Author: Lym
 * Created Date: 2016/11/23.
 * Function:
 *
 */

(function () {
    var app = angular.module('angularRoute', ['ngRoute']);

    app.controller('routeController', function ($scope) {});

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
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
                redirectTo: '/'
            })
    }]);
});

