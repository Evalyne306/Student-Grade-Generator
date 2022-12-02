
function speedDetector(){
  //we have used nested if so that the condition will check first if the first condition is true before going to the next
var speed = document.getElementById("speed").value
var points = (speed - 70) / 5
if(speed>70 && speed<=250){
  if(points<12){
   document.getElementById("status").innerHTML=(`Warning: you have ${points} demerit points`)
}else {
  document.getElementById("status").innerHTML=(`Sorry you have ${points} demerit points: LICENSE IS SUSPENDED `)
}
}else if(speed<=70){
  document.getElementById("status").innerHTML=(`you are OK, no demerit points`)
}if(speed<=0 || speed>250){
alert("Input correct speed please!")
}
  //we have put this range considering that if the speed is 0 then the car is not in motion
  //and we have put the hightest speed as 250 assuming someone own a fast car   
}


  