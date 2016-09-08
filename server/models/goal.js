var _ = require('lodash');
var Category = require('./category')
var goals = [
  {"id":1 ,"userId": 13, "categoryId": 1, "description": "learn PHP as a backend language", "content" : "I'm going to learn PHP from bluralsight online courses and will do some practical projects to develope my skills", "title" : "Learn PHP"},
  {"id":2 ,"userId": 2, "categoryId": 2, "description" : "Washing my teeth 2 times daily", "title" : "Washing my teeth", "content": "I should takr more care of my teeth by washing it at least 2 times daily."},
  {"id":3 ,"userId": 1, "categoryId": 3, "description" : "To develope my culture I will read everyday", "title" : "Reading a book","content": "I will keep my habit of reading everyday even i could read only 1 paper but it still worth it."},
  {"id":4 ,"userId": 2, "categoryId": 4, "description" : "Keep memorizing Quran", "title" : "Memorize Quran", "content": "I will keep memorizing quran untill finish it all and will do my best to use it in my everyday basis to follow it"},
  {"id":5 ,"userId": 4, "categoryId": 5, "description" : "Be more patient and act more moral accorcing to my personal values", "title" : "Increase my morality", "content": "although it isnot easy goal at all specially it is depnding on other partners, i will do my best to acheive this goal and will keep remembering that it is the right thing to do."}
]
var lastId = 6;

var buildGoals = function() {
  // Make a deep copy so we don't change the main goals array
  var rawGoals = JSON.parse(JSON.stringify(goals));
  var builtGoals = [];
  var goal;

  for(var i=0, l=rawGoals.length; i < l; i++) {
    goal = rawGoals[i];
    goal.category = Category.get(goal.categoryId);
    builtGoals.push(goal);
  }
  return builtGoals
}

module.exports = {
  get: function(id) {
    return _.find(buildGoals(), function(goal){
      return goal.id === id;
    });
  },
  all: function() {
    return buildGoals();
  },
  update: function(goal) {
    var updatedGoal;
    for(var i=0, l=goals.length; i < l; i++) {
      if(goals[i].id === goal.id){
        _.assign(goals[i], goal);
        updatedGoal = goals[i];
        break;
      }
    }
    return updatedGoal;
  },
  delete: function(id) {
    var deletedGoal;
    for(var i=0, l=goals.length; i < l; i++) {
      if(goals[i].id === id){
        deletedGoal = goals[i];
        goals.splice(i, 1);
        break;
      }
    }
    return deletedGoal;
  },
  create: function(goal) {
    lastId += 1;
    goal.id = lastId;
    goals.push(goal)
    return goal;
  }
}