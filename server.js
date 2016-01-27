var express = require('express');
var app = express();
var router = express.Router();
var path = require('path')
var path = __dirname + '/views/'

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "root.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(8765, function () {
  console.log('Server listening on port 8765');
});
