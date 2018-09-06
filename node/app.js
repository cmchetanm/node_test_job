const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//models
const models = require('./models');
//sync database
models.sequelize.sync().then(function(){
  console.log("Nice Database looks fine");
}).catch(function(err){
  console.log(err,"Something went wrong with database");
})

//require routes into the application
require('./routes')(app);
app.use(express.static(path.join(__dirname, '/dist')));
app.get('/', function(req, res){
    res.sendFile( __dirname + "/dist/index.html" );
});
//app.get('/', express.static(__dirname + './dist', { index: 'index.html' }));
// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) => res.status(200).send({
// message: 'Welcome to the beginning of nothingness.',
// }));
const port = parseInt(process.env.PORT, 10) || 5000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
