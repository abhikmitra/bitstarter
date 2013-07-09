var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var txt=fs.readFileSync("index.html");
var buf=new Buffer(txt);

app.get('/', function(request, response) {
  response.send("hello");
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
