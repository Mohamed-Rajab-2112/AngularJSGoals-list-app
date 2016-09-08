angular.module('GoalList').controller('GoalShowController', function(Goal, $scope, $routeParams, $location) {
  
  $scope.goal = Goal.get({id: $routeParams.id});
  
    $scope.deleteGoal = function(goal) {
    goal.$remove().finally(function() {
      $location.path("/goals");
    });
  }
});