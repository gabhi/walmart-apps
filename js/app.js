'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'snap',
	'ngRoute',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers'
	]).
filter('truncate', function () {
        return function (text, length, end) {
            if (isNaN(length))
                length = 10;

            if (end === undefined)
                end = "...";

            if (text.length <= length || text.length - end.length <= length) {
                return text;
            }
            else {
                return String(text).substring(0, length-end.length) + end;
            }

        };
    }).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
	$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
	$routeProvider.when('/basic', {templateUrl: 'partials/basic.html', controller: 'MyCtrl1'});
	$routeProvider.when('/intermediate', {templateUrl: 'partials/intermediate.html', controller: 'MyCtrl1'});
	$routeProvider.when('/advanced', {templateUrl: 'partials/advanced.html', controller: 'MyCtrl1'});
	$routeProvider.when('/type/:typeId', {templateUrl: 'partials/type.html', controller: 'TypeCtrl'});
	$routeProvider.when('/questions/:typeId/:catId', {templateUrl: 'partials/questions.html', controller: 'QstnsCtrl'});
	$routeProvider.when('/question/:qstnId', {templateUrl: 'partials/question.html', controller: 'QstnCtrl'});
	$routeProvider.when('/category/:catId', {templateUrl: 'partials/category.html', controller: 'CategoryCtrl'});

	$routeProvider.otherwise({redirectTo: '/view1'});
}]);
 

