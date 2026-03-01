const prompt = require("prompt-sync")();

let num = parseInt(prompt("Ingrese un número entero: "));

console.log(`\n--- Análisis del número ${num} ---`);

// CASO 1: >=30 o negativo
if (num >= 30 || num < 0) {
    if (num >= 30) console.log("  Número mayor o igual a 30");
    if (num < 0) console.log("  Número negativo");
    } 
    else if (num === 0) console.log("0 ");
    else if (num === 1) console.log("1  Unidad");
    else {
    // Verificar primo
    let esPrimo = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
    
    // Verificar potencia de 2 (usando el mismo num)
    let temp = num;
    while (temp > 1 && temp % 2 === 0) temp /= 2;
    let esPotencia2 = temp === 1;
    
    // Clasificación con operador ternario
    console.log(esPrimo ? "  Número primo" : 
    esPotencia2 ? "  Potencia de 2" : 
    "  Número compuesto");
}