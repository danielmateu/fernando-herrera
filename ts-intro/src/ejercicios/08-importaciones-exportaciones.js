"use strict";
//IMPORT - EXPORT
const carritoCompras = [
    {
        desc: 'Telefono 1',
        precio: 100,
    },
    {
        desc: 'Telefono 2',
        precio: 200,
    }
];
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
const [total, isv] = calculaISV(carritoCompras);
console.log('Total', total);
console.log('ISV', isv);
