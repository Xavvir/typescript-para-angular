class Character {
    nome: string;
    poder: number;
    habilidades: number;

    constructor(nome: string, poder: number, habilidades: number) {
        this.nome = nome;
        this.poder = poder;
        this.habilidades = habilidades;
    }

    attack(): void {
        console.log(`Força de ataque: ${this.poder}`)
    }
}
//Subclasse
class Magician extends Character {
    magicPoints: number;
    constructor(
        nome: string,
        poder: number,
        habilidades: number,
        magicPoints: number
    ) {
        super(nome, poder, habilidades);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Ryu", 10, 98)
const p2 = new Magician("Mago", 9, 30, 100); 

console.log (Magician);