"use strict";


let arr = [4, 12 ,17, 20, -1, 6];

//function som räknar ut summan av element i arrayen arr
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