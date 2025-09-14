//your JS code here. If required.
 const boxes = document.querySelectorAll(".square ") 
       console.log(boxes);

  for(let box of boxes){
  box.addEventListener("mouseover",(e)=>addBgColour( e));

  box.addEventListener("mouseout",(e)=> removeBg( e));
 
  }
  // add bg colour 
function addBgColour(e) {
    console.log(e.target);

    const selectedBoxeId =e.target.id;
    
    for(let i=0;i<boxes.length;i++){
    if(boxes[i].id !== selectedBoxeId){
        boxes[i].style.backgroundColor = "#6F4E37"; 

    }
    }
}

  // remove bg colour or add default colour
function removeBg(e){
 for(let box of boxes ){
    box.style.backgroundColor = "#E6E6FA"; 

 }
  } 