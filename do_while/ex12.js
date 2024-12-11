const prompt = require('prompt-sync')();

do {
    let celsius = parseFloat(prompt('Digite a temperatura em Celsius: '));
    let fahrenheit = (celsius * 9/5) + 32;

    console.log(`${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`);

    var continuar = prompt('Deseja realizar outra conversão? (sim/não): ');
} while (continuar.toLowerCase() === 'sim');
