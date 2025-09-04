class Puma {
nome: string;
corDaPelagem: string;
velocidadeMaxima: string;
constructor(nome: string) {
this.nome = nome;
this.corDaPelagem = "marrom-claro"; 
this.velocidadeMaxima = "80 km/h"; 
}
correr(): string {
return `${this.nome} corre em alta velocidade!`;
}
saltar(): string {
return `${this.nome} salta agilmente sobre obstáculos.`;
}
}
const puma1 = new Puma("Veloz");
const puma2 = new Puma("Sombra");
console.log("Um puma se chama:", puma1.nome);
console.log("O outro puma se chama:", puma2.nome);
console.log(puma1.correr());
console.log(puma2.saltar());
