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