

var xPos = 600; 
var yPos = 400; 
var size =10;
var store =0;

var app = function(){


  var canvas = document.getElementById("main-canvas");
  var context = canvas.getContext("2d");

  window.addEventListener("keydown", function(event) {
    doKeyDown(event, context, canvas);
  }, true);
  window.addEventListener("click", mouseClick, true);


  var changeColor = function(){
    console.log("hi");
    context.fillStyle = this.value;
  }

  var colorPicker = document.getElementById("input-color");
  colorPicker.addEventListener('change', changeColor);


};


var doKeyDown = function(event, context, canvas){
  var changeRate = 20;
 

  if(event.keyCode===32) {
    xPos = 600; 
    yPos = 400; 
    drawCircle(context, 600, 400 )
  }
  //up 38
  if(event.keyCode===38) {
    // debugger;
    yPos -= changeRate; 
    console.log(yPos, xPos);
    drawCircle(context, xPos, yPos, size);
  }
  //down 40
  if(event.keyCode===40) {
    yPos += changeRate;
    console.log(yPos, xPos); 
    drawCircle(context, xPos, yPos, size);
  }

  //left 37
  if(event.keyCode===37) {
    xPos -= changeRate; 
    console.log(yPos, xPos); 
    drawCircle(context, xPos, yPos, size);
  }

  //right 39 
  if(event.keyCode===39) {
    xPos += changeRate; 
    drawCircle(context, xPos, yPos, size);

  }

  //enter 13
  if(event.keyCode===13) {
    console.log("enter");
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  //shift 16
  if(event.keyCode===190){
      console.log("hi");
      size += 10;
      // debugger;
      // context.fillStyle = rgb(200, 10, 0);
  }

  if(event.keyCode===188){
      console.log("hi");
      size -= 10;
  }

  if(event.keyCode===191){
    if(size>0){
      store = size;
      size = 0;
    } else {
      size = store;
    }
}

};

var mouseClick = function(){
  console.log("x :" + event.layerX + "y :" + event.layerY);
};


var drawCircle = function(context, x,y, size){
  context.beginPath();
  context.arc(x, y, size, 0, 2 * Math.PI);
  context.fill();
};

module.exports = app; 

