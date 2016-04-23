var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello Jenkins MM - Leeroy Jenkins - first node.js app');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
