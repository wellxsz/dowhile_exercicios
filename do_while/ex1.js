const prompt = require('prompt-sync')();

let alunos = [];

do {
    let nome = prompt('Digite o nome do aluno: ');
    let idade = parseInt(prompt('Digite a idade do aluno: '));
    alunos.push({ nome, idade });

    let continuar = prompt('Deseja cadastrar outro aluno? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');

console.log('Cadastro de alunos concluído:');
console.log(alunos);
