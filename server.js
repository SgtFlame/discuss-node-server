var express        = require('express');        // call express
var bodyParser     = require('body-parser');
var config         = require("./config");
var methodOverride = require('method-override');

// Setup server
var app = express();
var server = require('http').createServer(app);

//app.use(compression);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

// Test route
app.get('/', function(req, res) {
    res.json({ message: 'Hello, World!' });
});

require('./routes')(app);

var port = config.port;
var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Host" + host);
  console.log("Express Server listening at http://%s:%s in %s mode", host, port, app.get('env'));
})

exports = module.exports = app;
