"use strict";

$(function(){
  $('.flexslider').flexslider({
    animation: "slide"
  });
});


var item=["Please input your name.","Please input your age.","Please input your telephone number","Please input your email."];

function check(){
  var elem =document.fm.elements;
  for(var i=0;i<4;i++){
    if(elem[i].value !=""){
      elem[i].style.color="#0000FF";
      switch(elem[i].name){
        case "age":			
          if(isNaN(elem[i].value)){
            alert("Please input correct age.");
            elem[i].style.color="#FF0000";
          }else if(elem[i].value<0){
            elem[i].style.color="#FF0000";
            alert("You did not input the correct numbers.");
          }
          break;
        
        case "tel":
          if(!elem[i].value.match(/^\d{2,3}-\d{4}-\d{4}$/)){
            elem[i].style.color="#FF0000";
            alert("Please input correct telephone number");
          }
        break;
        
        case "mail":
          if(!elem[i].value.match(/^\S+@\S+\.\S+$/)){
            elem[i].style.color="#FF0000";
            alert("Please input correct e-mail number.");
          }
        break;
      }
    }else{
      alert(item[i]);
    }
  }
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
