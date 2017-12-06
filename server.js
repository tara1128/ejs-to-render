var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// Note that 'res.render()' will look in a views folder for the view,
// so 'pages/index' is actually the full path 'views/pages/index'.
app.get('/', function(req, res) {
  var datas = [
    {name: 'Alex', age: 10},
    {name: 'Tara', age: 20},
    {name: 'Jack', age: 30},
  ];
  var text = 'This is just a normal sentence!';
  res.render('pages/index', {
    data: datas,
    title: text
  });
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8027);
console.log('8027 is the running port !');
