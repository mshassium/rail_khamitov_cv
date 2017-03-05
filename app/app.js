'use strict';

angular.module('cvApp', [
	'slick',
	'cvLang',
	'ngRoute',
	'cvApp.landing',
	'scroll',
	'skillBuilder',
	'ngDialog',
	'sun.scrollable',
	'angular-throttle-debounce'
]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.otherwise({redirectTo: ''});
}]);
