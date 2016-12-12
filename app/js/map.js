/**
 *
 * File: map.js
 * Author: Lym
 * Created Date: 2016/12/9.
 * Function:
 *
 */


var map;

function initialMap() {
    map = new BMap.Map("map", {enableMapClick: false});
}

$(function () {
   initialMap();
});