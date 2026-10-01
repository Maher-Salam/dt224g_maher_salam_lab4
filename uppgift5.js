//lösning till uppgift 5. Av Maher Salam, 2026
"use strict";

//skapar en array med maträtter och modifierar den med push och shift

//deklaration av maträtter i en array
let dishes = ["Pizza", "Hamburgare", "Tacos", "Sushi", "Tacopaj"];

//utskrift på alla element i arrayen
console.log(dishes);

//utskrift på första element
console.log(dishes[0]);

//utskrift på sista element
console.log(dishes[dishes.length - 1]);

/*lägger till element i slutet, tar bort första elementet
 och skriver ut den förändrade arrayen*/
dishes.push("LavaCake");
dishes.shift();
console.log(dishes);