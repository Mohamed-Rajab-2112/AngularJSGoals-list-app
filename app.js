var app = require("./server/routes");

// Start the server
var server = app.listen(100, function() {
 console.log('Listening on port %d', server.address().port);
});
