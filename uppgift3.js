//lösning till uppgift 3. Av Maher Salam, 2026
"use strict";

//skriver ut ett meddelande beroende på åldern

//deklarerar variabel
let age = 3 ;

//kontrollerar vilken ålder age är och skriver ut lämplig utskrift
if( age < 18) {
    console.log("Barn");
} else if(age <= 64) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
};