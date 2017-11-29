var express = require('express');
var app = express(); 

//if you are using body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//ye[]

app.use(require('./client/controllers/index'));

//set a port
app.listen(3000, function () {
  console.log('listening on ' + this.address().port); 
});

//set the server to use the public folder
//The root argument specifies the root directory from which to serve static assets. For more information on the options argument, see express.static.
// app.use(express.static('public')); 
app.use(express.static('./client/build'));
