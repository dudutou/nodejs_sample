var express = require('express');
var app = express();
app.listen(8080);

app.get('/test1', function(req, res) {
  res.send('TEST1\n');
});

app.post('/test2', function(req, res) {
  res.send('TEST2\n');
});

var bodyParser = require('body-parser');
//app.use(bodyParser.text({ type:'*/*' }));

//app.post('/', function(req, res) {
//  console.log(req.body);
//  res.end();
//});

app.use(bodyParser.json());

app.post('/', function(req, res) {
  for (key in req.body) {
    console.log('json kv: ', key, '=', req.body[key]);
  }
  res.end();
});
