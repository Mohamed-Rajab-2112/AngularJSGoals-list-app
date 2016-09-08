angular.module("GoalList").factory("Goal", function($resource) {
  return $resource("/goals/:id", {id: "@id"}, {
    update: {
      method: "PUT"
    }
  });
});