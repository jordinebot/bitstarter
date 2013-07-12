var express = require('express');
var Buffer = require('buffer').Buffer;
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    var index = new Buffer(data);
    response.send(index.toString());
  }); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});