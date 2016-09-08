var _ = require('lodash');
var Goal = require('../models/goal')

module.exports = function(app) {
  app.get('/goals', function(req, res) {
    res.json(Goal.all());
  });

  app.post('/goals', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Goal.create(req.body));
    }, 1000);
  });

  app.put('/goals/:id', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Goal.update(req.body));
    },1000)
  });

  app.get('/goals/:id', function(req, res) {
    var goalId = parseInt(req.param('id'), 10);
    res.json(Goal.get(goalId) || {});
  });

  app.delete('/goals/:id', function(req, res) {
    res.json(Goal.delete(parseInt(req.param('id'), 10)) || {});
  });
};
