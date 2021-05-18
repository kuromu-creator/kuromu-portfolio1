// さくら
window.addEventListener('DOMContentLoaded', ()=>{

  const sakura = document.querySelector(".cherry-blossom-container");
  
  const createPetal =()=>{
    const petalEl =document.createElement('span');
    petalEl.className = 'petal' ;
    const minSize = 10;
    const maxSize =45;
    const size = Math.random()* (maxSize +1- minSize)+ minSize;
    petalEl.style.width = size+'px' ; 
    petalEl.style.height = size + 'px';
    petalEl.style.left = Math.random()* innerWidth + 'px';
    sakura.appendChild(petalEl);
  
    setTimeout(()=>{
      petalEl.remove();
    },30000);
  }
  
  setInterval(createPetal, 300);
});


document.getElementById("point").addEventListener("click", function(){
  document.getElementById("point").classList.add("disappear");

 const start=document.querySelectorAll(".greet");

  for(let i=0; i<start.length; i++){
    start[i].classList.add("show");   
  }

  document.getElementById("jump").classList.add("move");
});

// うさぎと犬の会話部分
const target = document.querySelectorAll(".animationTarget");

document.addEventListener("scroll", function(){

  for(let i=0; i< target.length; i++){
      const getElementDistance = target[i].getBoundingClientRect().top+ target[i].clientHeight*1
      // console.log(getElementDistance)
      if(window.innerHeight>getElementDistance){
        target[i].classList.add("show");
      }
  }
})