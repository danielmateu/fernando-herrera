//Funciones con objetos como argumentos

interface PersonajeGame{
    nombre: string;
    puntosVida: number;
    mostrarHP:()=> void;

}

function curar(personaje:PersonajeGame, curarX:number): void{ //No retornamos nada
    personaje.puntosVida += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeGame = {
    nombre: 'Dani',
    puntosVida: 50,
    mostrarHP(){
        console.log('Puntos de vida', this.puntosVida);
    }
}

curar(nuevoPersonaje, 25);

nuevoPersonaje.mostrarHP();