//funtion to display content
 function appendToDisplay(content){
    display.value +=content

 }
//clear input
function calcClear(){
    display.value =""
}
//output
function calculate(){
    display.value = eval(display.value)
}
//clear buttion
 function removeLastDigit(){
    display.value = display.value.slice(0,-1)
 }