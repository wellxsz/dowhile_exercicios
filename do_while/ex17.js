const prompt = require('prompt-sync')();

do {
    let valorReais = parseFloat(prompt('Digite o valor em reais: R$ '));
    let taxaDeConversao = 6.10; // Exemplo de taxa de conversão de reais para dólares
    let valorDolares = valorReais / taxaDeConversao;
    console.log(`R$ ${valorReais.toFixed(2)} é igual a $ ${valorDolares.toFixed(2)} dólares.`);

    var continuar = prompt('Deseja converter outro valor? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');
