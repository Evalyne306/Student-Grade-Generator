
const prompt = require("prompt-sync")();
//this will prompt the user to enter a value
const speed = prompt("please Enter speed")

function speedDetector(){
  // the if .. else condition has been used to ensure all conditions are met
  if (speed<70){
    console.log('Ok')
  }else if (speed>=70){
    let points =(speed-70)/5
    if (points<12){
      console.log(`Your demerit points are ${points}`)
    }else if(points>=12){
      console.log(`you have ${points}.License suspended`)
    }
  }
}
//call function

speedDetector()



  