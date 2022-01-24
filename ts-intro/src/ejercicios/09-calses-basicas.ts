//Clases 

class Heroe{
    //alterEgo: String;
    //edad: number;
    //nombreReal: number;

    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string,
    ){}
    
}

const ironman = new Heroe('Iron Man',45,'Toni Stark')

console.log(ironman);
