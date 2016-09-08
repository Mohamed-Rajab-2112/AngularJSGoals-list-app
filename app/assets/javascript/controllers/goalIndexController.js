angular.module("GoalList").controller("GoalIndexController", function($scope, Goal) {
  $scope.goals = Goal.query();
});