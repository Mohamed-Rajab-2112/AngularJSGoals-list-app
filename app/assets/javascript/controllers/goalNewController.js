angular.module("GoalList").controller("GoalNewController", function(Goal,Category, $scope, $location) {
  $scope.submit = false;
  $scope.goal = new Goal();
  $scope.categories = Category.query();

  $scope.onSubmit = function(goal) {
    $scope.submit = true;
    goal.$save(goal).finally(function() {
      $scope.submit = false;
      $location.path("/goals");
    });
  };
});