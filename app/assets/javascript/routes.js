angular.module("GoalList").config(function($routeProvider) {
  $routeProvider
    .when('/goals', {
    templateUrl:'assets/templates/goals/index.html',
    controller: 'GoalIndexController'
  })
    .when('/goals/new', {
    templateUrl: 'assets/templates/goals/new.html',
    controller: 'GoalNewController'
  })
    .when('/goals/:id', {
    templateUrl: 'assets/templates/goals/show.html',
    controller: 'GoalShowController'
  })
    .when('/goals/:id/edit', {
    templateUrl: 'assets/templates/goals/edit.html',
    controller: 'GoalEditController',
  })
  .otherwise({redirectTo: '/goals'});
});