// dia del mes

const prompt = require("prompt-sync")();

let mes = parseInt(prompt("Ingrese el número del mes: "));
let año = parseInt(prompt("Ingrese el año: "));

if (mes < 1 || mes > 12) {
    console.log("Error: El mes debe ser entre 1 y 12.");
} else {
    let dias;
    let nombreMes;
    let bisiesto = false;



    if (mes === 1) nombreMes = "Enero";
    else if (mes === 3) nombreMes = "Marzo";
    else if (mes === 5) nombreMes = "Mayo";
    else if (mes === 7) nombreMes = "Julio";
    else if (mes === 8) nombreMes = "Agosto";
    else if (mes === 10) nombreMes = "Octubre";
    else if (mes === 12) nombreMes = "Diciembre";

    else if (mes === 4) nombreMes = "Abril";
    else if (mes === 6) nombreMes = "Junio";
    else if (mes === 9) nombreMes = "Septiembre";
    else if (mes === 11) nombreMes = "Noviembre";

    else if (mes === 2) nombreMes = "Febrero";


    switch(mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dias = 31;
            break;
//-------------------------------------------------------//
        case 4:
        case 6:
        case 9:
        case 11:
            dias = 30;
            break;       
//-------------------------------------------------------//    
        case 2:
            if (año % 4 === 0) {
                if (año % 100 !== 0) {
                    bisiesto = true;
                } else {
                    if (año % 400 === 0) {
                        bisiesto = true;
                    }
                }
            }
            
            if (bisiesto === true) {
                dias = 29;
            } else {
                dias = 28;
            }
            break;
    }

    console.log("\n" + nombreMes + " del " + año + " tiene " + dias + " días.");

    if (mes === 2) {
        if (bisiesto === true) {
            console.log("(Año bisiesto)");
        }
    }
}