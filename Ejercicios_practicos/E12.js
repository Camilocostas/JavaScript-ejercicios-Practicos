const prompt = require("prompt-sync")({ sigint: true });

// Calculador seleccion Op
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let seleccionOp = prompt("Ingrese la operación a realizar (+, -, *, /.  %):");    

switch (seleccionOp) {
    case "+":
        console.log(`El resultado de ${num1} + ${num2} es: ${num1 + num2}`);    
        break;
    case "-":
        console.log(`El resultado de ${num1} - ${num2} es: ${num1 - num2}`);
        break;
    case "*":
        console.log(`El resultado de ${num1} * ${num2} es: ${num1 * num2}`);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(`El resultado de ${num1} / ${num2} es: ${num1 / num2}`);    
        } else {
            console.log("Error: No se puede dividir por cero.");
        }
        break;
    case "%":
        if (num2 !== 0) {
            console.log(`El resultado de ${num1} % ${num2} es: ${num1 % num2}`);
        }else {
            console.log("Error: No se puede calcular el módulo por cero.");
        }
        break;

    default:
        console.log("Operación no válida. Por favor, ingrese una operación válida (+, -, *, /).");
        break;
}
