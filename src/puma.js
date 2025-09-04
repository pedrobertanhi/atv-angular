var Puma = /** @class */ (function () {
    function Puma(nome) {
        this.nome = nome;
        this.corDaPelagem = "marrom-claro";
        this.velocidadeMaxima = "80 km/h";
    }
    Puma.prototype.correr = function () {
        return "".concat(this.nome, " corre em alta velocidade!");
    };
    Puma.prototype.saltar = function () {
        return "".concat(this.nome, " salta agilmente sobre obst\u00E1culos.");
    };
    return Puma;
}());
var puma1 = new Puma("Veloz");
var puma2 = new Puma("Sombra");
console.log("Um puma se chama:", puma1.nome);
console.log("O outro puma se chama:", puma2.nome);
console.log(puma1.correr());
console.log(puma2.saltar());
