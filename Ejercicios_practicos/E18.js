// orden numnerico dado 3 numeros
const prompt = require("prompt-sync")({ sigint: true });

let num1 = parseFloat(prompt("Ingrese el primer numero:"));
let num2 = parseFloat(prompt("Ingrese el segundo numero:"));
let num3 = parseFloat(prompt("Ingrese el tercer numero:"));

if (num3 > num2 && num2 > num1) {
    console.log ("orden numerico asscendente correcto")
        } else if(num1 > num2 && num2 > num3) {
                console.log ("orden numerico descendente correcto");
        } else {
                console.log ("no existe un orden numerico");
}



