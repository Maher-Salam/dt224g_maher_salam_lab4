"use strict";

//skapar en array med maträtter och modifierar den med push och shift

//deklaration av myArray
let myArray = ["Pizza", "Hamburgare", "Tacos", "Sushi", "Tacopaj"];

//utskrift på alla element i arrayen
console.log(myArray);

//utskrift på första element
console.log(myArray[0]);

//utskrift på sista element
console.log(myArray[myArray.length - 1]);

/*lägger till element i slutet, tar bort första elementet
 och skriver ut de förändrade arrayen*/
myArray.push("LavaCake");
myArray.shift();
console.log(myArray);