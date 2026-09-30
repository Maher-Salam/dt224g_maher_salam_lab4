"use strict";

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

people.forEach(person => {
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