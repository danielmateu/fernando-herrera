let habilidades: (string|number|boolean)[] = ['Dani','Counter','Healing',100];

//Interfaz
interface Personaje{
    nombre:string;
    hp: number;
    habilidades: string[];
    puebloNatal?:string;
}

//Objetos

const personaje: Personaje = {
    nombre: 'Dani',
    hp: 100,
    habilidades: ['Bash','Counter','Healing'],
}

personaje.puebloNatal = 'Sitges'

console.table(personaje);
