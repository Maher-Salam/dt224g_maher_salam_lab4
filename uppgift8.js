"use strict";

let bok = {
    titel: "The Alchemist",
    författare: "Paulo Coelho",
    utgivningsår: "1988",
};

function minBok(arrBok){
    console.log("Titel: " + arrBok.titel);
    console.log("Författare: " + arrBok.författare);
    console.log("Publicerad: " + arrBok.utgivningsår);
};

minBok(bok);