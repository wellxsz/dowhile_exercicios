const prompt = require('prompt-sync')();

do {
    let numero = parseInt(prompt('Digite o número para a contagem regressiva: '));

    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }

    var continuar = prompt('Deseja fazer outra contagem regressiva? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');
