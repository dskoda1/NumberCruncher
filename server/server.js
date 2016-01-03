var express = require('express');
var router = express();
var server = require('http').createServer(router);

//Helper middleware
var path = require('path');
var bp = require('body-parser');
//For parsing post requests
router.use(bp.urlencoded({extended: false}));


//var util = require('../shared/index')();
var routes = require('./routes/index')(router);


//Start up the server
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("Number Cruncher server listening at", addr.address + ":" + addr.port);
});

