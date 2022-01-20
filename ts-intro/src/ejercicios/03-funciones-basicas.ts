//Funciones básicas

function sumar(a:number,b:number):number{
    return (a + b);
}

const sumarFlecha = (a:number,b:number):number=>{
    return a + b;
}

function multiplicar(numero:number, otroNumero?:number, base:number = 2):number{
    return numero * base;
}

//const resultado = sumar(10,5);

const resultado = multiplicar(5,0,10)

console.log(resultado);