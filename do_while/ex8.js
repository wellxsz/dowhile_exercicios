const prompt = require('prompt-sync')();

do {
    let nome = prompt('Digite o nome do aluno: ');
    let idade = parseInt(prompt('Digite a idade do aluno: '));

    if (idade >= 16 && idade <= 100) {
        console.log(`Nome: ${nome}, Idade: ${idade}`);
        break;
    } else {
        console.log('Idade inválida! A idade deve estar entre 16 e 100.');
    }

    var continuar = prompt('Deseja tentar novamente? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');
