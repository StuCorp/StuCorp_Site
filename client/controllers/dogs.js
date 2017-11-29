const express = require('express');
const dogRouter = new express.Router; 
let dogs = ["pug", "dashhound", "golden re-colly", "Germanskipom"];

dogRouter.get('/:id', (request, response)=>{
  response.json({data: dogs[request.params.id]});
});


dogRouter.get('/', (request, response)=>{
  response.json({data: dogs});
});

dogRouter.put('/:id', (request, response)=>{
  dogs[request.params.id] = request.body.dog;
  response.json({data: dogs});
});

dogRouter.post('/', (request, response)=>{
  dogs.push(request.body.dog);
  response.json({data: dogs});
});

dogRouter.delete('/:id', (request, response)=>{
  dogs.splice(request.params.id, 1);
  response.json({data: dogs});
});


module.exports = dogRouter;