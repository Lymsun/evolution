/**
 *
 * File: map.js
 * Author: Lym
 * Created Date: 2016/12/9.
 * Function:
 *
 */


var map;
var are_points = {
    "nanzhuang": {
        "lng": 113.02824, "lat": 22.998061
    },
    "zumiao": {
        "lng": 113.120249, "lat": 23.032702
    },
    "zhangcha": {
        "lng": 113.0914, "lat": 23.04280
    },
    "shiwan": {
        "lng": 113.104894, "lat": 23.005772
    }
};
var styleJson = [
    {"featureType": "water", "elementType": "all", "stylers": {"color": "#29414b"}},
    {"featureType": "highway", "elementType": "geometry.fill", "stylers": {"color": "#768e98"}},
    {"featureType": "highway", "elementType": "geometry.stroke", "stylers": {"color": "#122a34"}},
    {"featureType": "arterial", "elementType": "geometry.fill", "stylers": {"color": "#000000"}},
    {"featureType": "arterial", "elementType": "geometry.stroke", "stylers": {"color": "#2e4650"}},
    {"featureType": "local", "elementType": "geometry", "stylers": {"color": "#102102832"}},
    {"featureType": "land", "elementType": "all", "stylers": {"color": "#122a34"}},
    {"featureType": "railway", "elementType": "geometry.fill", "stylers": {"color": "#000000"}},
    {"featureType": "railway", "elementType": "geometry.stroke", "stylers": {"color": "#08304b"}},
    {"featureType": "subway", "elementType": "geometry", "stylers": {"lightness": -70}},
    {"featureType": "building", "elementType": "geometry.fill", "stylers": {"color": "#344c56"}},
    {"featureType": "all", "elementType": "labels.text.fill", "stylers": {"color": "#857f7f"}},
    {"featureType": "all", "elementType": "labels.text.stroke", "stylers": {"color": "#122a34"}},
    {"featureType": "building", "elementType": "geometry", "stylers": {"color": "#022338"}},
    {"featureType": "green", "elementType": "geometry", "stylers": {"color": "#062032"}},
    {"featureType": "boundary", "elementType": "all", "stylers": {"color": "#1e1c1c"}},
    {"featureType": "manmade", "elementType": "all", "stylers": {"color": "#022338"}}
];

function initialMap() {
    map = new BMap.Map("map");
    map.enableScrollWheelZoom(true);
    var setting_point = new BMap.Point(are_points.zumiao.lng, are_points.zumiao.lat);
    map.centerAndZoom(setting_point, 15);
    map.setMapStyle({
        styleJson: styleJson
    });
    var marker = new BMap.Marker(setting_point);
    map.addOverlay(marker);
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
}

$(function () {
   //initialMap();
});