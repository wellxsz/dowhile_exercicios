const prompt = require('prompt-sync')();

let produtos = [];

do {
    let nomeProduto = prompt('Digite o nome do produto: ');
    let quantidade = parseInt(prompt('Digite a quantidade em estoque: '));
    produtos.push({ nomeProduto, quantidade });

    var continuar = prompt('Deseja cadastrar outro produto? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');

console.log('Cadastro de produtos concluído:');
console.log(produtos);
