var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

app.use('/assets', express.static('assets'));
app.use(express.static('assets'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/projects",function(req,res){
  res.sendFile(path + "projects.html");
});

router.get("/projects/vmask",function(req,res){
  res.sendFile(path + "vmask.html");
});

router.get("/projects/vmask_milestone",function(req,res){
  res.sendFile(path + "vmask_milestone.html");
});

router.get("/old",function(req,res){
  res.sendFile(path + "root.html");
});

router.get("/projects/mirror",function(req,res){
  res.sendFile(path + "mirror.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(8765, function () {
  console.log('Server listening on port 8765');
});
