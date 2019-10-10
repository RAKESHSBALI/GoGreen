var express = require('express')
var app = express()
app.get('/',function(req,res){
  var path = require('path')
  var filepath  = './src/index.html'
  var resolvedpath = path.resolve(filepath)
  console.log(resolvedpath)
  
  res.sendFile(resolvedpath)
});
app.listen(8080)