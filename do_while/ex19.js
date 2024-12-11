const prompt = require('prompt-sync')();

const opcoes = ['pedra', 'papel', 'tesoura'];

do {
    let usuarioEscolha = prompt('Escolha pedra, papel ou tesoura: ').toLowerCase();
    if (!opcoes.includes(usuarioEscolha)) {
        console.log('Opção inválida. Tente novamente.');
        continue;
    }

    let computadorEscolha = opcoes[Math.floor(Math.random() * 3)];
    console.log(`Computador escolheu: ${computadorEscolha}`);

    if (usuarioEscolha === computadorEscolha) {
        console.log('Empate!');
    } else if (
        (usuarioEscolha === 'pedra' && computadorEscolha === 'tesoura') ||
        (usuarioEscolha === 'papel' && computadorEscolha === 'pedra') ||
        (usuarioEscolha === 'tesoura' && computadorEscolha === 'papel')
    ) {
        console.log('Você venceu!');
    } else {
        console.log('Você perdeu!');
    }

    var continuar = prompt('Deseja jogar novamente? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');
