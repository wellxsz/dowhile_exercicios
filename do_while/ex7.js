const prompt = require('prompt-sync')();

let numeroCorreto = Math.floor(Math.random() * 10) + 1;
let tentativa;

do {
    tentativa = parseInt(prompt('Adivinhe um número entre 1 e 10: '));

    if (tentativa !== numeroCorreto) {
        console.log('Número incorreto, tente novamente!');
    } else {
        console.log('Parabéns! Você acertou!');
    }

    var continuar = prompt('Deseja tentar novamente? (sim/não): ');
} while (tentativa !== numeroCorreto && continuar.toLowerCase() === 'sim');
