'use strict'

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
}

let counter = new Counter();

console.log(counter.up());
console.log(counter.up());
console.log(counter.up());

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3900;

var routes = require('./routes/prueba');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/', routes);
app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:'+port);
});

module.exports = app;