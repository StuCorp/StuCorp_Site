const express = require('express');
const formsRouter = new express.Router;
const path = require('path');
let Post = require('./../../post.js')

formsRouter.get('/', (request, response)=>{
  response.sendFile(path.join(__dirname + '/../form.html'))
});

formsRouter.post('/', (request, response)=>{
  let post1 = new Post(request.body); 
  // dog = request.body.user_name;
  console.log("hi");
  console.log(post1);
  response.sendFile(path.join(__dirname + '/../index.html'))
});

module.exports = formsRouter;