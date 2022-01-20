"use strict";
//Funciones básicas
function sumar(a, b) {
    return (a + b);
}
const sumarFlecha = (a, b) => {
    return a + b;
};
function multiplicar(numero, otroNumero, base = 2) {
    return numero * base;
}
//const resultado = sumar(10,5);
const resultado = multiplicar(5, 0, 10);
console.log(resultado);
