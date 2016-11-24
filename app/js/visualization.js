/**
 *
 * File: visualization.js
 * Author: Lym
 * Created Date: 2016/11/24.
 * Function:
 *
 */

var app = angular.module('visualizationApp', []);

app.controller('visualizationController', function ($scope, $rootScope, $timeout) {
    $scope.date = {
        currentDate : "",
        currentTime : ""
    };
    var updateTime = function () {
        var tempTime = new Date();
        var tempMinutes = tempTime.getMinutes().toString()<10?"0"+tempTime.getMinutes().toString():tempTime.getMinutes().toString();
        var tempSeconds = tempTime.getSeconds().toString()<10?"0"+tempTime.getSeconds().toString():tempTime.getSeconds().toString();
        $scope.date.currentTime = tempTime.getHours().toString()+":"+tempMinutes+":"+tempSeconds;
        $timeout(function () {
            updateTime();
        }, 1000);
    };
    var updateDate = function () {
        var tempDate = new Date();
        var tempYear = tempDate.getFullYear().toString();
        var tempMonth = tempDate.getMonth().toString()<10?"0"+tempDate.getMonth().toString:tempDate.getMonth().toString();
        var tempDay = tempDate.getDate().toString()<10?"0"+tempDate.getDate().toString():tempDate.getDate().toString();
        var tempWeek = "";
        switch(tempDate.getDay()) {
            case 1: tempWeek = "一";break;
            case 2: tempWeek = "二";break;
            case 3: tempWeek = "三";break;
            case 4: tempWeek = "四";break;
            case 5: tempWeek = "五";break;
            case 6: tempWeek = "六";break;
            case 7: tempWeek = "七";break;
        }
        $scope.date.currentDate = tempYear+"-"+tempMonth+"-"+tempDay+"  星期"+tempWeek;
    };
    updateTime();
    updateDate();
});