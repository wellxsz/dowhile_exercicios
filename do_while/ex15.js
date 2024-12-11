const prompt = require('prompt-sync')();

let somaNotas = 0;
let quantidadeRespostas = 0;

do {
    let satisfacao = parseInt(prompt('Qual sua satisfação com o curso de 1 a 5? '));
    
    if (satisfacao >= 1 && satisfacao <= 5) {
        somaNotas += satisfacao;
        quantidadeRespostas++;
    } else {
        console.log('Nota inválida! A nota deve ser entre 1 e 5.');
    }

    var continuar = prompt('Deseja responder novamente? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');

let mediaSatisfacao = somaNotas / quantidadeRespostas;
console.log(`A média de satisfação é: ${mediaSatisfacao.toFixed(2)}`);
