$(function(){
  $('.flexslider').flexslider({
    animation: "slide"
  });
});


imgLeftStart = 0;
imgLeftEnd = 1200; // Adjust the end position according to your needs
imgLeft = imgLeftStart;
imgTop = "100px";
moveStep = 2; // Adjust the step size for smoothness
moveSpeed = 10; // Adjust the speed of animation (lower value means faster)

function moveImgX() {
  document.getElementById("img1").style.left = imgLeft + "px"; 

  if (imgLeftEnd - imgLeftStart > 0) {
    imgLeft += moveStep;

    if (imgLeft > imgLeftEnd) {
      imgLeft = imgLeftStart;
    }
  } else {
    imgLeft -= moveStep;
    if (imgLeft < imgLeftEnd) {
      imgLeft = imgLeftStart;
    }
  }

  setTimeout(moveImgX, moveSpeed); 

}