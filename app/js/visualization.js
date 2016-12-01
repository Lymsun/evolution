/**
 *
 * File: visualization.js
 * Author: Lym
 * Created Date: 2016/11/24.
 * Function:
 *
 */

var app = angular.module('visualizationApp', []);

//创建service调用百度天气api
app.service('_http', function ($http, $q) {
    var url = 'http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=VvpQWTKVx3gfWRr2z9IjPHD9&callback=JSON_CALLBACK';
    var weatherImgObject = {
        "sunshine": ["晴", "../img/weather/sunshine.png"],
        "cloudy": ["多云", "../img/weather/cloudy.png"],
        "manyCloud": ["阴", "../img/weather/manyCloud.png"],
        "mist": ["雾", "../img/weather/mist.png"],
        "lightRain": ["小雨", "../img/weather/lightRain.png"],
        "moderateRain": ["中雨", "../img/weather/moderateRain.png"],
        "heavyRain": ["大雨", "../img/weather/heavyRain.png"],
        "extremeHeavyRain": ["暴雨", "../img/weather/heavyRain.png"],
        "thunderStorm": ["雷雨", "../img/weather/thunderStorm.png"],
        "snowRain": ["雨夹雪", "../img/weather/snowRain.png"],
        "freezing": ["冻雨", "../img/weather/freezing.png"],
        "hail": ["冰雹", "../img/weather/hail.png"]
    };

    this.getWeather = function () {
        var deferred = $q.defer();
        $http.jsonp(url).success(function (data) {
            var currentWeather = data.results[0].weather_data[0].weather;
            var temperatureHigh = data.results[0].weather_data[0].temperature.split("~")[0];
            var temperatureLow = data.results[0].weather_data[0].temperature.split("~")[1];
            var tempWeatherImageUrl = "../img/weather/manyCloud.png";
            for(var weatherKey in weatherImgObject)
            {
                if(weatherImgObject[weatherKey][0] == currentWeather)
                {
                    tempWeatherImageUrl = weatherImgObject[weatherKey][1];
                    break;
                }
            }
            var weather = {
                weatherResult: currentWeather + "  " + temperatureHigh + " ~ " + temperatureLow,
                weatherImg: tempWeatherImageUrl
            };
            deferred.resolve(weather);
        }).error(function () {
            deferred.reject('There was an error');
        });
        return deferred.promise;
    }
});

//创建service更新时间与日期
app.service('_time', function ($q) {
   this.getTime = function () {
       var deferredTime = $q.defer();
       var tempTime = new Date();
       var tempMinutes = tempTime.getMinutes().toString()<10?"0"+tempTime.getMinutes().toString():tempTime.getMinutes().toString();
       var tempSeconds = tempTime.getSeconds().toString()<10?"0"+tempTime.getSeconds().toString():tempTime.getSeconds().toString();
       var currentTime = tempTime.getHours().toString()+":"+tempMinutes+":"+tempSeconds;

       deferredTime.resolve(currentTime);
       return deferredTime.promise;
   };

   this.getDate = function () {
       var deferredDate = $q.defer();
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
       var currentDate = tempYear+"-"+tempMonth+"-"+tempDay+"  星期"+tempWeek;

       deferredDate.resolve(currentDate);
       return deferredDate.promise;
   }
});

app.controller('visualizationController', function ($scope, $rootScope, $timeout, _http, _time) {
    //调用_time service更新时间与日期
    $scope.date = {
        currentDate : "",
        currentTime : ""
    };
    var updateTime = function () {
        _time.getTime().then(function (data) {
            $scope.date.currentTime = data;
        });
        $timeout(function () {
            updateTime();
        }, 1000);
    };
    var updateDate = function () {
        _time.getDate().then(function (data) {
            $scope.date.currentDate = data;
        });
    };

    //调用_http service更新天气
    $scope.weather = {
        currentWeather: "",
        currentWeatherImg: ""
    };
    var displayWeather = function () {
        _http.getWeather().then(function (data) {
            $scope.weather.currentWeather = data.weatherResult;
            $scope.weather.currentWeatherImg = data.weatherImg;
        }, function () {
            alert("Error");
        });
        $timeout(function () {
            displayWeather();
        }, 1000*60*60);
    };

    updateTime();
    updateDate();
    displayWeather();
});