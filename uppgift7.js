"use strict";

//funktion som loopar igenom en array och räknar ut summan av element i arrayen 

//tilldelat tal i en array
let arr = [4, 12 ,17, 20, -1, 6];

//funktionen som returnerar summman av talen i en array
function calcArray(arr) {
    let sum = 0;

    arr.forEach(num => { 
        sum += num 
    });
    return sum;
}
//utskrift på summan av elementen i arrayen arr
console.log("Summan är: " + calcArray(arr));
//loop som skriver ut varje element 
arr.forEach( num => { 
    console.log(num);
})