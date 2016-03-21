//Our includes required for starting a server
var path = require('path');
var express = require('express');
var router = express();
var morgan = require('morgan')
var bp = require('body-parser');
var routes = require('./routes/index')(router);


//Set the port
router.set('port', (process.env.PORT || 3000));

//Point the server to serve files from the public directory
router.use('/', express.static(path.join(__dirname, '../public')));

//For parsing post requests
router.use(bp.urlencoded({extended: false}));

//Set up logging
router.use(morgan(':method :url in :response-time ms status :status'))

//Start up the server
router.listen(router.get('port'), function() {
    console.log('Number Cruncher server started: http://localhost:' + router.get('port') + '/');
    console.log("Or.. https://number-cruncher-dskoda1.c9users.io");
})

