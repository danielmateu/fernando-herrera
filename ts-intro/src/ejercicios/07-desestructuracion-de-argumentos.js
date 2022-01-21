"use strict";
//Desestructuracion de argumentos -> Desestructuramos las propiedades que a nosotros nos interesan.
const telefono = {
    desc: "Nokia 48 10",
    precio: 150,
};
const tablet = {
    desc: "Ipad 10",
    precio: 450,
};
function calculaISV(productos) {
    let total = 0;
    //productos.forEach((producto)=>{
    // total += producto.precio;
    // })
    productos.forEach(({ precio }) => {
        total += precio;
    });
    return [total, total * 0.121];
}
const articulos = [telefono, tablet];
const [total, isv] = calculaISV(articulos);
console.log('Total', total);
console.log("ISV", isv);
