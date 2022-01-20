"use strict";
const superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main Str',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + this.direccion.ciudad + this.direccion.pais;
    }
};
const direccion = superHeroe.mostrarDireccion();
console.log(superHeroe.nombre);
