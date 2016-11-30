/**
 *
 * File: angularRoute.js
 * Author: Lym
 * Created Date: 2016/11/23.
 * Function: angular route function
 *
 */


var app = angular.module('angularRoute',
    [   'ngRoute',
        'angularRoute.homeApp',
        'angularRoute.dashboardApp'
    ]);

app.service('_http', function ($http, $q) {
    var url = 'http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=VvpQWTKVx3gfWRr2z9IjPHD9';

    this.getWeather = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: url
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function () {
            deferred.reject('There was an error');
        });
        return deferred.promise;
    }
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

app.controller('routeController', function ($scope, _http) {
    $scope.weather = "";
    var displayWeather = function () {
        _http.getWeather().then(function (data) {
            $scope.weather = data.date;
            alert(data.date);
        }, function (data) {
            alert(data);
        });
    };

    displayWeather();
});

/*
* function get_weather(callback){
 $.ajax({
 type: "GET",
 url: "http://api.map.baidu.com/telematics/v3/weather?location=%E4%BD%9B%E5%B1%B1&output=json&ak=VvpQWTKVx3gfWRr2z9IjPHD9",
 dataType: "jsonp",
 success: function(data){
 var currentWeatherArray = [];
 var tempWeatherImageUrl = "";
 var currentWeatherObj = data.results[0].weather_data[0];
 var currentWeatherStatus = currentWeatherObj.weather;
 var currentHighTemperature = currentWeatherObj.temperature.split("~")[0];
 var currentLowTemperature = currentWeatherObj.temperature.split("~")[1];

 for(var weatherKey in weatherImgObject)
 {
 if(weatherImgObject[weatherKey][0] == currentWeatherStatus)
 {
 tempWeatherImageUrl = weatherImgObject[weatherKey][1];
 break;
 }
 else
 {
 tempWeatherImageUrl = "img/weather/manyCloud.png";
 }
 }
 currentWeatherArray.push(currentWeatherStatus);
 currentWeatherArray.push(currentHighTemperature);
 currentWeatherArray.push(currentLowTemperature);
 currentWeatherArray.push(tempWeatherImageUrl);

 callback(currentWeatherArray);
 }
 });
 }
* */