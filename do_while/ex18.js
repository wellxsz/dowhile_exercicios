const prompt = require('prompt-sync')();

do {
    let palavra = prompt('Digite uma palavra: ').toLowerCase().replace(/[^a-z]/g, '');
    let palavraInvertida = palavra.split('').reverse().join('');

    if (palavra === palavraInvertida) {
        console.log('A palavra é um palíndromo!');
    } else {
        console.log('A palavra não é um palíndromo.');
    }

    var continuar = prompt('Deseja testar outra palavra? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');
