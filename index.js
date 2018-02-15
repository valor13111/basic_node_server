var http = require('http');
var port = 3000;

// this creates a server using Node's http native service, and
// uses a callback waiting for a request.  Once that request
// has been made from the client, it responds to the console
http.createServer(function(request, response) {
  console.log("You have made a request to the node server on port " + port);
  console.log("This is the response!");
  console.log("The callback function is waiting for the request, and gives this response.");
}).listen(port);

// will be executed on start up, and only this until we make a request
// the request in this case will be going to localhost:3000
// the callback function in createServer won't respond until it receives a request
console.log('Listening on port ' + port);
