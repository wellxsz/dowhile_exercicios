const prompt = require('prompt-sync')();

do {
    let valorCompra = parseFloat(prompt('Digite o valor total da compra: R$ '));
    let numeroParcelas = parseInt(prompt('Digite o número de parcelas: '));

    let valorParcela = valorCompra / numeroParcelas;
    console.log(`O valor de cada parcela é: R$ ${valorParcela.toFixed(2)}`);

    var continuar = prompt('Deseja calcular outro parcelamento? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');
