var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('root.html');
});

app.listen(8765, function () {
  console.log('Server listening on port 8765');
});
