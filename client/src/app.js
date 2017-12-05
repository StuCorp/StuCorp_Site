
var Ui = require('./views/ui.js');
var Canvas = require('./views/canvas.js');
var ProjectDisplay = require('./views/projectDisplay.js'); 


var app = function(){

  console.log("loading UI")
  // Ui();
  ProjectDisplay();
  // Canvas();

}


window.onload =app;