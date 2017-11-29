const express = require('express');
const personRouter = new express.Router(); 


var jsonData = [{person: "Stuart", age: 32},{person: "Mary", age: 34}];

//home route
personRouter.get('/', (request, response)=>{
  response.json(jsonData);
});


//a second get route that sends a json response from '/data'
//second route plus 'id' from the request address 
personRouter.get('/:id', (request, response)=>{

  response.json({data: jsonData[request.params.id]});

});


//a second get route that sends a json response from '/data'
personRouter.get('/', (request, response)=>{
  response.json(jsonData);
});

//post -- add new person to the set 
personRouter.post('/', (request, response)=>{
  jsonData.push(request.body.person);
  response.json({data: jsonData});
});

//update -- edit api 
personRouter.put('/:id', (request,response)=>{
  jsonData[request.params.id] = request.body.person; 
  //again response ise just returning all the data
  response.json({data: jsonData});
});

personRouter.delete('/:id', (request, response)=>{
  jsonData.splice(request.params.id, 1);
  response.json({data: jsonData});
  
});

module.exports = personRouter;
