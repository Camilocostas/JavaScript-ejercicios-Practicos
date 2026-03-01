// Tipo de caracter (alfabético, dígito, o de puntuación o especial)

/**
 * IDENTIFICADOR DE CARACTERES ASCII
 * =================================
 * 
 * | Tipo                      | Rango ASCII |

 * | Dígitos 0-9               | 48 - 57     |
 * | Mayúsculas A-Z            | 65 - 90     |
 * | Minúsculas a-z            | 97 - 122    |
 * | Puntuación . , ; : ! ?    | 33 - 47     |
 * | Especial @ # $ % &        | otros rangos|
 */

const prompt = require("prompt-sync")();

let char = prompt("Ingrese un carácter: ");
let codigo = char.charCodeAt(0); // Obtener el código ASCII del primer carácter ingresado

if (codigo >= 65 && codigo <= 90 || codigo >= 97 && codigo <= 122){
    console.log("alfabético");
} else if(codigo >= 48 && codigo <= 57){
    console.log("dígito");
} else if (codigo >= 33 && codigo <= 47){
    console.log("puntuacion")
} else {
    console.log("especial");
}