//Desestructuracion de argumentos -> Desestructuramos las propiedades que a nosotros nos interesan.

export{ Producto}
interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: "Nokia 48 10",
    precio: 150,
};

const tablet: Producto = {
    desc: "Ipad 10",
    precio: 450,
};

export function calculaISV(productos: Producto[]): [number,number] {
    let total = 0;
    //productos.forEach((producto)=>{
    // total += producto.precio;
    // })

    productos.forEach(({ precio }) => {
        total += precio;
    });
    return [total,total * 0.121];
}

const articulos = [telefono, tablet];
const [total,isv] = calculaISV(articulos);


console.log('Total', total);
console.log("ISV", isv);

