angular.module("GoalList").factory("Category", function($resource) {
  return $resource("/categories/:id", {id: "@id"}, {});
});