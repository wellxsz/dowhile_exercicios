const prompt = require('prompt-sync')();

do {
    let capital = parseFloat(prompt('Digite o valor do capital: R$ '));
    let taxa = parseFloat(prompt('Digite a taxa de juros (%): '));
    let tempo = parseInt(prompt('Digite o tempo (em anos): '));

    let juros = (capital * taxa * tempo) / 100;
    let valorFinal = capital + juros;

    console.log(`Valor final: R$ ${valorFinal.toFixed(2)} (Juros: R$ ${juros.toFixed(2)})`);

    var continuar = prompt('Deseja calcular outro valor? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');
