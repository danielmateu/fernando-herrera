"use strict";
//Funciones con objetos como argumentos
function curar(personaje, curarX) {
    personaje.puntosVida += curarX;
    console.log(personaje);
}
const nuevoPersonaje = {
    nombre: 'Dani',
    puntosVida: 50,
    mostrarHP() {
        console.log('Puntos de vida', this.puntosVida);
    }
};
curar(nuevoPersonaje, 25);
nuevoPersonaje.mostrarHP();
