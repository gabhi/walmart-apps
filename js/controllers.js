'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('MyCtrl1', ['$scope', '$location','$http','$templateCache',
	function($scope, $location, $http, $templateCache) {
		$scope.key ="a6kwenh4cpva3tzt7wdvwb7r";
		$scope.go = function ( path ) {
			$location.path( path );
		};
		$scope.method = 'GET';
    	$scope.url = 'http://api.walmartlabs.com/v1/feeds/bestsellers?apikey='+$scope.key+'&categoryId=3944';

		$http({method: $scope.method, url: $scope.url, cache: $templateCache}).
        success(function(data, status) {
          $scope.status = status;
          $scope.data = data;
        }).
        error(function(data, status) {
          $scope.data = data || "Request failed";
          $scope.status = status;
      });

		 


	}


	])
.controller('QstnsCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.typeId = $routeParams.typeId;
		$scope.catId = $routeParams.catId;


		var values1 = [
		{name:'Arrays', age:25, gender:'boy'},
		{name:'Matrix', age:30, gender:'girl'},
		{name:'Linked List', age:28, gender:'girl'},
		{name:'Stacks & Ques', age:15, gender:'girl'},
		{name:'Trees & Graphs', age:28, gender:'girl'},
		{name:'Searching', age:95, gender:'boy'},
		{name:'Sorting', age:50, gender:'boy'} 
		];
		var values2 = [
		{name:'Arrays', age:25, gender:'boy'},
		{name:'Matrix', age:30, gender:'girl'},
		{name:'Linked List', age:28, gender:'girl'},
		{name:'Stacks & Ques', age:15, gender:'girl'},
		{name:'Trees & Graphs', age:28, gender:'girl'},
		{name:'Searching', age:95, gender:'boy'},
		{name:'Sorting', age:50, gender:'boy'} 
		];

  //1. function way
  $scope.getValues = function(typeId,catId) {
  	if(typeId === 'basic') {
  		return values1;
  	}
  	
  }



}


])
.controller('QstnCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.qstnId = $routeParams.qstnId;
		


		var values1 = [
		{name:'Arrays', age:25, gender:'boy'}
		
		];
		var values2 = [
		{name:'Arrays', age:25, gender:'boy'},
		{name:'Matrix', age:30, gender:'girl'},
		{name:'Linked List', age:28, gender:'girl'},
		{name:'Stacks & Ques', age:15, gender:'girl'},
		{name:'Trees & Graphs', age:28, gender:'girl'},
		{name:'Searching', age:95, gender:'boy'},
		{name:'Sorting', age:50, gender:'boy'} 
		];

  //1. function way
  $scope.getValues = function(typeId,catId) {
  	
  	return values1;
  	
  	
  }



}


])
.
controller('TypeCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.typeId = $routeParams.typeId;


		var values1 = [
		{name:'Arrays', age:25, gender:'boy'},
		{name:'Matrix', age:30, gender:'girl'},
		{name:'Linked List', age:28, gender:'girl'},
		{name:'Stacks & Ques', age:15, gender:'girl'},
		{name:'Trees & Graphs', age:28, gender:'girl'},
		{name:'Searching', age:95, gender:'boy'},
		{name:'Sorting', age:50, gender:'boy'} 
		];
		var values2 = [
		{name:'Arrays', age:25, gender:'boy'},
		{name:'Matrix', age:30, gender:'girl'},
		{name:'Linked List', age:28, gender:'girl'},
		{name:'Stacks & Ques', age:15, gender:'girl'},
		{name:'Trees & Graphs', age:28, gender:'girl'},
		{name:'Searching', age:95, gender:'boy'},
		{name:'Sorting', age:50, gender:'boy'} 
		];

  //1. function way
  $scope.getValues = function(id) {
  	if(id === 'basic') {
  		return values1;
  	}
  	if(id === 'intermediate') {
  		return values2;
  	}
  	if(id === 'advanced') {
  		return values2;
  	}
  }



}


])
.controller('MyCtrl2', [function() {

}]);