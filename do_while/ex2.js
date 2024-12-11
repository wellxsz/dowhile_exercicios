const prompt = require('prompt-sync')();

do {
    let notas = [];
    let somaNotas = 0;
    let numeroDeNotas = parseInt(prompt('Quantas notas você quer inserir? '));

    for (let i = 0; i < numeroDeNotas; i++) {
        let nota = parseFloat(prompt(`Digite a nota ${i + 1}: `));
        notas.push(nota);
        somaNotas += nota;
    }

    let media = somaNotas / numeroDeNotas;
    console.log(`A média das notas é: ${media.toFixed(2)}`);

    var continuar = prompt('Deseja simular mais notas? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');
