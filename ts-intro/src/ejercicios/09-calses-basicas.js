"use strict";
//Clases 
class Heroe {
    //alterEgo: String;
    //edad: number;
    //nombreReal: number;
    constructor(alterEgo, edad, nombreReal) {
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }
}
const ironman = new Heroe('Iron Man', 45, 'Toni Stark');
console.log(ironman);
