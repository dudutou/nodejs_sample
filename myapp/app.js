var express = require('express');
var app = express();
var ejs = require('ejs');
app.engine('ejs', ejs.renderFile);
app.get('/', function(req, res) {
  res.render('index.ejs', {
    title: "EJS Sample Code",
    content: "This is EJS Sample..."
  });
});
app.listen(8080);
