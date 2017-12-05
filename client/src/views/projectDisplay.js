var Project = require('./Project'); 


var projectDisplay = function(){

var project1 = new Project({title:'Pugmatic',img:'/images/pug1.png', description:'puggng'});
var project2 = new Project({title:'Blasteroid',img:'/images/blast1.png', description:'blasting'});
var project3 = new Project({title:'Follow The Money', img:'/images/follow1.png', description:'follings monies'});
var project4 = new Project({title:'4thEstate', img:'/images/news1.png', description:'newsing'});
var project5 = new Project({title:'UKTop20', img:'/images/top201.png', description:'top musicing'});

var projects = [project1, project2, project3, project4, project5];
console.log(projects);


// //CREATE PROJECT DIV
// var newDiv = document.getElementById('findMe'); 
// //ADD DIV TO CONTAIN PROJECT ITEMS
// var itemsDiv = document.getElementById('items');
// var title = document.createElement('h1');
// title.innerHTML = "Projects";

// //ADD UNORDERED LIST TO DIV
// var ul = document.createElement('ul');
// ul.className = "proj-nav"; 
// itemsDiv.appendChild(ul);

// //LOOP THROUGH PROJECTS AND ADD TO PROJECT UL
// projects.forEach((project)=>{
// //CREATE LIST ITEM 
// var li = document.createElement('li');
// li.innerHTML = project.title; 
// li.classList.add('inactive');

// // //Add TITLE CHILD TO LIST ITEM
// // var h3 = document.createElement('h3');
// // h3.innerHTML = project.title; 
// //ADD IMAGE CHILD TO LIST ITEM
// var img = document.createElement('img');
// img.src = project.img; 
// img.classList.add('inactive', 'br','bc');
// //ADD DESCRIPTION TO LIST ITEM
// var p = document.createElement('p');
// p.innerHTML = project.description; 

// // ADD EVENT LISTENER TO LIST ITEM
// li.addEventListener('click', ()=>{
// //if LIST ITEM CLICK SHOW
// if(li.classList.contains('inactive')){
//   li.classList.remove('inactive');
//   li.classList.add('active');  
// }else{
//   li.classList.add('inactive');
//   li.classList.remove('active');
// }
// });

// // APPEND LIST ITEM TO UNORDERED LIST
// itemsDiv.appendChild(title);
// ul.appendChild(li);
// itemsDiv.appendChild(img);
// itemsDiv.appendChild(p);



// });


// var img = document.createElement('img');
// img.src = project1.img; 
// newDiv.appendChild(img); 

    var projectLis = document.querySelectorAll('.project-nav .nav li');
    var projectParas = document.querySelectorAll('.project-descriptions p'); 
    var projectImages = document.querySelectorAll('.carousel li');

var spaceMaker = document.getElementById('spaceMaker');
spaceMaker.innerHTML = projectParas[0].innerHTML;

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
          spaceMaker.innerHTML = para.innerHTML;

        } else {

          para.classList.add('hide'); 
          para.classList.remove('active'); 
        }

      });

      projectImages.forEach((imgli, index, imglis)=>{
       
        if(imgli.classList.contains(li.firstElementChild.className)){
          imgli.classList.add('active'); 
          imgli.classList.remove('hide'); 

        } else {

          imgli.classList.add('hide'); 
          imgli.classList.remove('active'); 
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

module.exports = projectDisplay; 