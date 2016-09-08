angular.module("GoalList").controller("GoalEditController", function(Goal,Category, $scope, $routeParams, $location) {
  $scope.goal = Goal.get({id: $routeParams.id});
  $scope.categories = Category.query();
  $scope.submit = false;

  $scope.onSubmit = function(goal) {
    $scope.submit = true;
    goal.$update(goal).finally(function() {
      $scope.submit = false;
      $location.path("/goals");
    });
  };
});