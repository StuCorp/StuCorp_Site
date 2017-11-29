const express = require('express');
const router = new express.Router(); 
var path = require('path');


//tell the router what router 'persons' for what address route '/data' 
router.use('/data', require('./persons'));
router.use('/dogs', require('./dogs'));
router.use('/forms', require('./forms'));

//you might want a welcome html
router.get('/', (request, response)=>{
  // response.json({potato: "eat them"});
  // response.sendFile('../index.html');
  // response.sendFile(__dirname + '/../index.html');
  response.sendFile(path.join(__dirname + '/../build/index.html'));


});

router.get('/about', (request,response)=>{
  response.json({info: "this page. wow"});
});

module.exports = router;
