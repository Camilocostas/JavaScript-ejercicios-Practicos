const prompt = require("prompt-sync")({ sigint: true });

// ¿numero divisible por 3?
let num1 = parseInt(prompt("Ingrese un número 1:"));
let num2 = parseInt(prompt("Ingrese un número 2:"));

if (num2 % num1 === 0) {
    console.log("El número 1: " + num1 + " es divisible por el número 2: " + num2);
} else if (num1 % num2 === 0) {
    console.log("El número 2: " + num2 + " es divisible por el número 1: " + num1);
} else {
    console.log("Ninguno de los números es divisible por el otro.");
}