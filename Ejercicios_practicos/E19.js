const prompt = require("prompt-sync")({ sigint: true });

//calculador simple
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let operador = prompt("Ingrese el tipo de operacion:");

if (operador === "+") {
    console.log(`El resultado de ${num1} + ${num2} es: ${num1 + num2}`);
} else if (operador === "-") {
    console.log(`El resultado de ${num1} - ${num2} es: ${num1 - num2}`);
} else if (operador === "*") {
    console.log(`El resultado de ${num1} * ${num2} es: ${num1 * num2}`);
} else if (operador === "/") {
    if (num2 !== 0) {
        console.log(`El resultado de ${num1} / ${num2} es: ${num1 / num2}`);
    } else {
        console.log("Error: No se puede dividir por cero.");
    } 
} else if (operador === "%") {
    if (num2 !== 0) {
        console.log(`El resultado de ${num1} % ${num2} es: ${num1 % num2}`);
    } else {
        console.log("Error: No se puede calcular el módulo por cero.");
    }
} else {
    console.log("Operador no válido. Por favor, ingrese un operador válido (+, -, *, /, %).");
}