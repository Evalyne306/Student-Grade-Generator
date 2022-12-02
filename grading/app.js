function results(){
    var a = document.getElementById("marks").value;
    
if(a>80){
document.getElementById("grade").innerHTML= "A";
}else if(a>60 && a<=79){
  document.getElementById("grade").innerHTML= "B"
}else if(a>=50 && a<=59){
  document.getElementById("grade").innerHTML= "C"
}else if(a<=49 && a >=40){
  document.getElementById("grade").innerHTML= "D"
}else if(a <=40){
  document.getElementById("grade").innerHTML= "E"
}   
  }


