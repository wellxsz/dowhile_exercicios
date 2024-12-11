const prompt = require('prompt-sync')();

do {
    let numero = parseFloat(prompt('Digite o número: '));
    let expoente = parseInt(prompt('Digite o expoente: '));

    let resultado = Math.pow(numero, expoente);
    console.log(`Resultado de ${numero} elevado a ${expoente}: ${resultado}`);

    var continuar = prompt('Deseja calcular outra potência? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');
