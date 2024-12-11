const prompt = require('prompt-sync')();

let total = 0;

do {
    let valor = parseFloat(prompt('Digite o valor do produto: R$ '));
    total += valor;

    var continuar = prompt('Deseja adicionar outro produto? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');

console.log(`O total das compras é: R$ ${total.toFixed(2)}`);
