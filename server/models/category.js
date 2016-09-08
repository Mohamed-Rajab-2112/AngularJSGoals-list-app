var _ = require('lodash');

var categories = [
  {"id": 1, "name": "Owner of internationl web services company"},
  {"id": 2, "name": "Health care"},
  {"id": 3, "name": "Personal development"},
  {"id": 4, "name": "Religious believer"},
  {"id": 5, "name": "Good Father/Husband/Son"}
]

module.exports = {
  get: function(id) {
    return _.find(categories, function(category){
      return category.id === id;
    });
  },
  all: function() {
    return categories;
  }
}