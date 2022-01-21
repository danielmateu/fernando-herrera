//DESESTRUCTURACION DE OBJETOS - Nos sirve para crear constantes con las propiedades que tenemos de los propios objetos

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    year:number;
}

const reproductor: Reproductor ={
    volumen: 90,
    segundo: 120,
    cancion: 'Suck my KcuS',
    detalles: {
        autor: 'Iron Maiden',
        year: 2018
    }
}

//const autor = 'Fulando';

//const { volumen, segundo, cancion, detalles:{autor:autorDetalle} } = reproductor;

const {volumen,segundo,cancion,detalles} = reproductor
const { autor } = detalles;


/*
console.log('El volumen actual es ', volumen);
console.log('El segundo actual es ', segundo);
console.log('La canción actual es ', cancion);
console.log('El autor es ', autor);
*/

//DESESTRUCTURACION DE ARREGLOS

const dragonBall: string[] = ['Goku','Vegeta','Trunks'];
const [ p1,p2,p3 ] = dragonBall;

console.log('Personaje 1', p1);
console.log('Personaje 2', p2);
console.log('Personaje 3', p3);

