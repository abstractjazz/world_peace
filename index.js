console.log("i'm in index.js")

let img;

function preload(){
    img = loadImage('./assets/cookie.png')
}

function setup() {
    createCanvas(1440, 800);
    img.loadPixels();
  }
  
  function draw() {
    if (mouseIsPressed) {
        image(img, mouseX, mouseY, 90, 90)

      } else {
    
    }
  image(img, 1030, 60, 90, 90)
  
  }

  function mousePressed(){
    clear();
  }

  const hereButton = document.getElementById('here-button')
  
  hereButton.onclick=function(){console.log('clicked!')}
  
  function getRndInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  
  const addPointer=function() {
    const left_position=getRndInteger(1233,1300)
    const top_position=getRndInteger(493,625)
    const image=document.createElement('img')
    image.src="./assets/menu-pointer.png"
    image.style.width="128px"
    image.style.height="128px"
    image.style.position='absolute';
    image.style.top=top_position + "px"
    image.style.left=left_position + "px"
    image.id="big-pointer"
    const section2=document.querySelector('.section-2')
    section2.appendChild(image)

  }

  const handleClick = function(){
    const form=document.createElement('form')
    form.id="beta-form"
    const formCheck=document.getElementById('beta-form')
    const section2=document.querySelector('.section-2')
    if (formCheck===null) {
      section2.appendChild(form)
      } else { 
    }
  }
  
  hereButton.onclick=handleClick;
  hereButton.onmouseenter=addPointer
  hereButton.onmouseleave=function(){
  const pointer=document.getElementById('big-pointer')
  pointer.remove();
  }
  


  // const form = document.getElementById('beta-form')
  
 
  // AUTO SCROLL TO 1st PARA 

  // setTimeout(autoScroll, 1000)

  // function autoScroll(){
  //   window.scrollTo(0, 100)
  // }

