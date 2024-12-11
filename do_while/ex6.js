const prompt = require('prompt-sync')();

let somaNotas = 0;
let quantidadeNotas = 0;

do {
    let nota = parseFloat(prompt('Digite a nota: '));
    somaNotas += nota;
    quantidadeNotas++;

    var continuar = prompt('Deseja inserir outra nota? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');

let media = somaNotas / quantidadeNotas;
console.log(`A média das notas é: ${media.toFixed(2)}`);
