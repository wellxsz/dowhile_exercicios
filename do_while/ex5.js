const prompt = require('prompt-sync')();

let senhaValida = false;

do {
    let senha = prompt('Digite uma senha forte: ');

    if (senha.length >= 8 && /\d/.test(senha) && /[a-zA-Z]/.test(senha)) {
        senhaValida = true;
        console.log('Senha válida!');
    } else {
        console.log('Senha inválida! A senha deve ter pelo menos 8 caracteres, incluindo letras e números.');
    }
} while (!senhaValida);
