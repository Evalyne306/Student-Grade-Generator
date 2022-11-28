
console.log(answer/500)*100
function result(){
    var a =parseInt(document.getElementById("html").value);
    var b =parseInt(document.getElementById("javascript").value);
    var c =parseInt(document.getElementById("css").value);
    var d =parseInt(document.getElementById("ruby").value);
    var e =parseInt(document.getElementById("react").value); 
    // the condition is that there will not be an output for values above 100 or below zero
    if(a> 100 ||a< 0 ||  b > 100 || b<0||c > 100|| c < 0 || d > 100 ||d< 0|| e > 100|| e<0){    
    alert("Enter correct number");
}
  else{
    //by taking the keyed in total divided by actual total multiplied by 100 will give us the percentages
    //we are able to add functionality property javaScript files and HTML files using classes and id
    var obtained= a + b + c + d + e;
    document.getElementById("obt").innerHTML = obtained;
    var pers = obtained/500 * 100;
   document.getElementById("pers").innerHTML = pers + "%";
   //we use the conditional statement that will gve us grades as the return values
   if(pers > 79){
    document.getElementById("grade").innerHTML="A";
   }
   else if(pers >=60 && pers <=79){
    document.getElementById("grade").innerHTML="B-";
   }
   else if(pers >49 && pers <=59){
    document.getElementById("grade").innerHTML="C-";
   }
   else if(pers >=40 && pers <= 49){
    document.getElementById("grade").innerHTML="D-";
   }
   else if(pers < 40){
    document.getElementById("grade").innerHTML="E";
   }
}

}
