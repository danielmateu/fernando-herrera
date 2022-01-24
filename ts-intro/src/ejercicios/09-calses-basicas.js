"use strict";
//Clases 
class PersonaNormal {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
}
class Heroe extends PersonaNormal {
    constructor(alterEgo, edad, nombreReal) {
        super(nombreReal, 'New York, USA');
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }
}
const ironman = new Heroe('Iron Man', 45, 'Toni Stark');
console.log(ironman);
