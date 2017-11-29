var ui = function(){

  let carouselOn = true;

    var changePhoto = ()=>{
      var cats = document.querySelectorAll('.carousel li');
      let switched = false; 
      for (let i = 0; i < cats.length; i++){
        if(cats[i].className === 'show' && switched === false){
         cats[i].className = 'hide'; 
         cats[(i+1) % cats.length].className = 'show';
         switched = true;
       }
     }
   };

   //PHOTO CAROUSEL
   var ul = document.querySelector('ul.carousel');
   ul.addEventListener('click', (event)=>{
    // changePhoto();
    toggleCarousel();
  });


    // Continuous rotation
    var changePhotoAuto = ()=>{   
      window.setTimeout(()=>{
      if(carouselOn === true){
        changePhoto();
      changePhotoAuto();
      }
    }, 3000);
     
  }
    changePhotoAuto();

  //Toggle carousel 
  const toggleCarousel = ()=>{
    if(carouselOn===true){
      carouselOn= false;
    } else {
      carouselOn = true;
      changePhotoAuto();
    }
  };
  
  console.log("UI loaded");
}




module.exports = ui; 