/**
 *
 * File: homeController.js
 * Author: Lym
 * Created Date: 2016/11/23.
 * Function:
 *
 */

var homeApp = angular.module('homeApp', []);
    homeApp.controller('homeController', function ($scope) {
        $scope.hello = "Hello Home!";
});