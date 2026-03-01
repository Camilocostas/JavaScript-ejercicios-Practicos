const prompt = require("prompt-sync")({ sigint: true });

// Calculadora con código de operación
let num1 = parseFloat(prompt("Primer número: "));
let num2 = parseFloat(prompt("Segundo número: "));
let codigo = parseInt(prompt("Código (1=+, 2=*, 3=/): "));

switch(codigo) {
    case 1:
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 2:
        console.log(`${num1} × ${num2} = ${num1 * num2}`);
        break;
    case 3:
        if (num2 === 0) {
            console.log("Error: No se puede dividir por cero");
        } else {
            console.log(`${num1} ÷ ${num2} = ${num1 / num2}`);
        }
        break;
    default:
        console.log("Código inválido. Use 1, 2 o 3");
}