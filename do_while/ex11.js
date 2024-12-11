const prompt = require('prompt-sync')();

let saldo = 0;

do {
    let operacao = prompt('Digite "deposito" para depositar ou "saque" para sacar: ').toLowerCase();
    
    if (operacao === 'deposito') {
        let valor = parseFloat(prompt('Digite o valor do depósito: '));
        saldo += valor;
    } else if (operacao === 'saque') {
        let valor = parseFloat(prompt('Digite o valor do saque: '));
        saldo -= valor;
    }

    console.log(`Seu saldo atual é: R$ ${saldo.toFixed(2)}`);

    var continuar = prompt('Deseja realizar outra operação? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');
