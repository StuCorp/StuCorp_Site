
var Ui = require('./views/ui.js');


var app = function(){

  console.log("loading UI")
  Ui();

  var projectLis = document.querySelectorAll('.project-nav .nav li');
  var projectParas = document.querySelectorAll('.project-descriptions p'); 

// let pugAnchor = document.querySelector("#pug");
// pugAnchor.addEventListener('click', (event)=>{

// });

projectLis.forEach((li)=>{
  li.addEventListener('click', (event)=>{
    //Hide each project paragraph
    //Display if clicked 
    projectParas.forEach((para, index, paras)=>{
     


      if(para.classList.contains(li.firstElementChild.className)){
        para.classList.add('active'); 
        para.classList.remove('hide'); 

      } else {

        para.classList.add('hide'); 
        para.classList.remove('active'); 
      }

    });

    //for each li added class 'hide'
    //add 'active' for clicked 
    projectLis.forEach( (link)=>{
      //if link is the clicked one
      if(link === li){
          link.classList.add('active'); 
          link.classList.remove('hide'); 
      } else {
          link.classList.add('hide'); 
          link.classList.remove('active'); 
      }

    } );

  } );
});

}


window.onload =app;