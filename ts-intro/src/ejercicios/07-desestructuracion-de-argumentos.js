//Desestructuracion de argumentos -> Desestructuramos las propiedades que a nosotros nos interesan.
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculaISV = void 0;
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
    exports.calculaISV = calculaISV;
    const articulos = [telefono, tablet];
    const [total, isv] = calculaISV(articulos);
    console.log('Total', total);
    console.log("ISV", isv);
});
