const prompt = require("prompt-sync")({ sigint: true });

//comparacion de dos numeros
let num1 = parseFloat(prompt("Ingrese el primer numero:"));
let num2 = parseFloat(prompt("Ingrese el segundo numero:"));

if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
}else if (num1 < num2) {
    console.log(num2 + " es mayor que " + num1);
}else {
    console.log("Los numeros son iguales");
}