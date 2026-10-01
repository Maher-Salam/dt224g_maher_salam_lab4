//lösning till uppgift 8. Av Maher Salam, 2026
"use strict";

//funktion som skriver ut information om en bok

//deklarerar ett objekt som innehåller information om en bok
let bok = {
    titel: "The Alchemist",
    författare: "Paulo Coelho",
    utgivningsår: "1988",
};

//funktion som skriver ut titel, författare och utgivningsår 
function minBok(arrBok){
    console.log("Titel: " + arrBok.titel);
    console.log("Författare: " + arrBok.författare);
    console.log("Publicerad: " + arrBok.utgivningsår);
};

//kallar till funktionen minBok
minBok(bok);