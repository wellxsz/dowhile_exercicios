const prompt = require('prompt-sync')();

const usuarioCorreto = 'admin';
const senhaCorreta = '12345';

do {
    let usuario = prompt('Digite o nome de usuário: ');
    let senha = prompt('Digite a senha: ');

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        console.log('Login bem-sucedido!');
        break;
    } else {
        console.log('Usuário ou senha incorretos.');
    }

    var continuar = prompt('Deseja tentar novamente? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');
