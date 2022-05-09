
//souligner
let menu = document.querySelectorAll('li');

menu.forEach(function(li){
   li.addEventListener('mouseover',()=>{
     li.style.textDecoration = 'underline';
   });
   li.addEventListener('mouseout',()=>{
    li.style.textDecoration = 'none';
});
})
//slider image2
var images =['./Assets/Illustrations/Home/Batslider1.png','./Assets/Illustrations/Home/Batslider2.png','./Assets/Illustrations/Home/Batslider3.png','./Assets/Illustrations/Home/Batslider4.png',
'./Assets/Illustrations/Home/Batslider4.png','./Assets/Illustrations/Home/Batslider5.png',
'./Assets/Illustrations/Home/Batslider6.png','./Assets/Illustrations/Home/Batslider7.png',
'./Assets/Illustrations/Home/Batslider8.png','./Assets/Illustrations/Home/Batslider9.png','./Assets/Illustrations/Home/Batslider10.png'];

var i = 0;
function slideShow() {
  document.getElementById("images").src= images[i];
   if(i<images.length-1){
     i++;
   }
   else {
    i=0;
   }
   setTimeout("slideShow()" ,2000);
}
window.onload = slideShow
