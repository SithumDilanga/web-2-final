"use strict";
$(function(){
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

function loadOtherPage() {
  var iframe = document.createElement("object");
  iframe.setAttribute("data", "score2.html");
  iframe.setAttribute("type", "text/html");
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "500px");
  document.getElementById("content").appendChild(iframe);
}

function init() {
  const stu = [
    ["wang", 80], 
    ["chen", 75], 
    ["zhao", 92], 
    ["liu", 60], 
    ["yamamoto", 91], 
    ["tanaka", 82]
  ];
  
  let gradeAStudents = [];
  
  let totalScore = 0;
  let avgScore = 0;
  
  // names of 6 students and their score.
  
  document.write("There are six students. Their scores are as follows <br> <br>");
  
  for(let i = 0; i < stu.length; i++) {
    const str = String(stu[i]);
    document.write(str.replace(',',' ') + "<br>");      
  
    // pushing studentsto a new array whose score is greater than 90
    if(stu[i][1] >= 90) {
      gradeAStudents.push(stu[i]);
    }
  
    // calculating total score
    totalScore = totalScore + stu[i][1];
  
  }
  
  document.write("<br>");
  
  // Display students whose score is over 90. (student name, score)
  
  document.write("The following students are students who can get A <br> <br>");
  
  for(let i = 0; i < gradeAStudents.length; i++) {
    const str = String(gradeAStudents[i]);
    document.write(str.replace(',',' ') + "<br>");
  }
  
  document.write("<br>");
  
  // displaying total score
  document.write("Total score is " + totalScore + "<br>");
  
  // displaying average score
  document.write("The average score is " + totalScore / stu.length + "<br>");
  
  document.write("<br>");
  
  // Display students name and score according to their score (descending order).  
  // sorting
  stu.sort(function(a, b) {
    return b[1] - a[1];
  });
  
  // displaying sorted students array
  for(let i = 0; i < stu.length; i++) {
    const str = String(stu[i]);
    document.write(str.replace(',',' ') + "<br>");
  }
}
