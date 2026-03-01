const prompt = require("prompt-sync")({ sigint: true });

//tipo de angulo
let angulo = parseFloat(prompt("Ingrese el valor del angulo: "));

if (angulo < 90){
    console.log("El angulo es agudo");
} else if (angulo > 90){
    console.log("El angulo es obtuso");
} else {
    console.log("El angulo es recto");
}

