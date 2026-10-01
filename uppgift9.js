//lösning till uppgift 9. Av Maher Salam, 2026
"use strict";

//funktion som kontrolllerar ifall en person är snabbare än Usain Bolt

/*deklarerar en array med tre objekt 
som innehåller en persons namn, åler och tid det tar för personen att springa 100meter*/
const people = [

    {
        name: "Ricardo",
        age: 28,
        sprint100: 13.7,
   },
   {
        name: "Lewis",
        age: 35,
        sprint100: 9.58,
    
   },
   {
        name:"Ingvar",
        age: 78,
        sprint100: 9.54
   }
];

//loop som går igenom arrayen
people.forEach(person => {
    /*if sats som kontrollerar om personen är snabbare, lika snabb eller inte snabbare 
    än usain bolt och skriver ut lämplig utskrift*/
    if (person.sprint100 < 9.58) {
    console.log(person.name + " är " + person.age +" år och springer 100 meter på " 
                + person.sprint100 + "s och är snabbare än Usain Bolt");
                
    }else if (person.sprint100 === 9.58) {

    console.log(person.name + " är " + person.age +" år och springer 100 meter på " 
                + person.sprint100 + "s vilket gör hen lika snabb som Usain Bolt");

    }else {

        console.log(person.name + " är " + person.age +" år och springer 100 meter på " 
                + person.sprint100 + "s och är inte snabbare än Usain Bolt");
                
    }
});