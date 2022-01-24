//IMPORT - EXPORT

//import { calculaISV } from "./07-desestructuracion-de-argumentos";

//import { Producto } from "./07-desestructuracion-de-argumentos";
interface Producto {
    desc: string;
    precio: number;
}

const carritoCompras: Producto[] = [
    {
        desc:'Telefono 1',
        precio: 100,
    },
    {
        desc:'Telefono 2',
        precio: 200,
    }
];

function calculaISV(productos: Producto[]): [number,number] {
    let total = 0;
    //productos.forEach((producto)=>{
    // total += producto.precio;
    // })

    productos.forEach(({ precio }) => {
        total += precio;
    });
    return [total,total * 0.121];
}

const [total,isv] = calculaISV( carritoCompras);

console.log('Total', total);
console.log('ISV', isv);

