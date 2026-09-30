"use strict";

let arr = [4, 12 ,17, 20, -1, 6];

function calcArray(arr) {
    let sum = 0;

    arr.forEach(num => { 
        sum += num 
    });
    return sum;
}

console.log("Summan är: " + calcArray(arr));
arr.forEach( num => { 
    console.log(num);
})