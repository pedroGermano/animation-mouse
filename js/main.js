let img = document.querySelector(".img");
let wordArr = document.querySelectorAll(".word");

document.addEventListener("mousemove", function(e){
  imgPos(e, img)
})

function imgPos(e, image){
  mousePosX = e.x;
  mousePosY = e.y;
  image.style.left = mousePosX - (image.getBoundingClientRect().width * 0.5) + "px";
  image.style.top = mousePosY - (image.getBoundingClientRect().height * 0.5) + "px";
  appear(e, image)
}

function appear(e, image){
  for(let i = 0; i<wordArr.length; i++){
    if(getComputedStyle(wordArr[i]).animationDelay === "0.0001s"){
      image.src = wordArr[i].innerHTML + ".jpg";
      image.style.animation = "appear 0.1s ease-in forwards";
      break;
    }
    if(getComputedStyle(wordArr[i]).animationDelay === "0s"){
      image.src = ""
      image.style.animation = ""
    }
  }
}