/**
 *
 * File: angularJsDemo1.js
 * Author: Lym
 * Created Date: 2016/10/28.
 * Function:
 *
 */

var app = angular.module('angularJsDemo1', []).controller('helloController', function($scope, $timeout){
   $scope.person = {
       name : ""
   };
    var updateClock = function(){
        var tempDate = new Date();
        var tempMinutes = tempDate.getMinutes().toString()<10?"0"+tempDate.getMinutes().toString():tempDate.getMinutes().toString();
        var tempSeconds = tempDate.getSeconds().toString()<10?"0"+tempDate.getSeconds().toString():tempDate.getSeconds().toString();
        $scope.clock = {
            now : tempDate.getHours().toString() + ":" + tempMinutes + ":" + tempSeconds
        };
        $timeout(function(){
            updateClock();
        }, 1000);
        /*setInterval(function(){
            $scope.$apply(updateClock);
        }, 1000);*/
    };

    $scope.addMachine = {
        count : 0,
        addCount : function(amount){
            this.count += amount;
        },
        subtractCount : function(amount){
            this.count -= amount;
        }
    };

    $scope.user = {
        name : "",
        age : 0,
        maxNum : "",
        minNum : "",
        email: "",
        url : "",
        submitForm: function (isValid) {
            if(!isValid) {
                alert("FAIL");
            }
        }
    };

    updateClock();
});

app.directive('multipleEmail', [function () {
    return {
        require: "ngModel",
        link: function (scope, element, attr, ngModel) {
            if (ngModel) {
                var emailsRegexp = /^([a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*[;；]?)+$/i;
            }
            var customValidator = function (value) {
                var validity = ngModel.$isEmpty(value) || emailsRegexp.test(value);
                ngModel.$setValidity("multipleEmail", validity);
                return validity ? value : undefined;
            };
            ngModel.$formatters.push(customValidator);
            ngModel.$parsers.push(customValidator);
        }
    };
}]);