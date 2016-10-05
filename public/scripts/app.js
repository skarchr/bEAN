'use strict';

var angular = require('angular');
var route = require('angular-route');
var BlueCtrl = require('./controllers/BlueController');
var RedCtrl = require('./controllers/RedController');


angular.module('app',['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "./views/red.html",
            controller:'redCtrl'
        })
        .when("/red", {
            templateUrl : "./views/red.html",
            controller:'redCtrl'            
        })
        .when("/blue", {
            templateUrl : "./views/blue.html",
            controller:'blueCtrl'            
        });
    })
    .controller('blueCtrl', ['$scope', BlueCtrl])
    .controller('redCtrl', ['$scope', RedCtrl]);