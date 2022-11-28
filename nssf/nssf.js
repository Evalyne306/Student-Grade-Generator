// we make prompt const every time you test you will be require to imput speed
const prompt = require('prompt-sync')();
//we assign the prompt output message by using let variable
let basicSalary =prompt("please enter your basic salary =Ksh.")
// Prompt message to infor user to enter benefits value
let benefits =prompt("Please enter your benefits =Ksh.")
//definening the fuction using let variable
let KRA;
let NHIF;
let NSSF;
let netSalary;
let totalNHIF;
let pension= 26000
function netSalaryCalculator(){
    // calculate
    let grossIncome = (+basicSalary+ +benefits)