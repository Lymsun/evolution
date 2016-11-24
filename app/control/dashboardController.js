/**
 *
 * File: dashboardController.js
 * Author: Lym
 * Created Date: 2016/11/23.
 * Function:
 *
 */

var dashboardApp = angular.module('angularRoute.dashboardApp', []);
    dashboardApp.controller('dashboardController', function ($scope) {
        $scope.hello = "Hello Dashboard!";
});