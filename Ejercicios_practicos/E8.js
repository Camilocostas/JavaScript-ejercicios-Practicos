//algoritmo que escriba los dias de la semana por teclado
const prompt = require("prompt-sync")();

let diaSemana = parseFloat(prompt("Ingrese un número del 1 al 7:"));

// implementacion de la condicion if para validar que el numero sea entero. no decimal ni letra
if (Number.isInteger(diaSemana) && diaSemana >= 1 && diaSemana <= 7) {
switch(diaSemana){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    }
} else {
    console.log("Número inválido. Digite nuevamente el numero.");
}