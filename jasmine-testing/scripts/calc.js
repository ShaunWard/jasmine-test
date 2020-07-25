Calculator = function(){
    this.value = 0;
}

Calculator.prototype.add = function(number){  //calc.add is calling this function
    if(typeof(number) == "number"){
        this.value += number;
    } else {
        alert("Error!");
    }
}

// function addition(numOne, numTwo) {
//     if(typeof(numOne) == "number" && typeof(numTwo) == "number") {
//         return numOne + numTwo;
//     } else {
//         alert("Error!");
//     }
// }