const prompt = require("prompt-sync")();

// 7. Calculadora de precio de billete de avión
const precioKm = 2.5;
const descuento_30 = 0.30;
const kmMin_Descuento = 800;
const diasMin_Descuento = 7;

let distancia = parseFloat(prompt("Ingrese la distancia en km:"));
let diasEstancia = parseInt(prompt("Ingrese el número de días:"));  

let totalKm = distancia * 2;
let precioBase = totalKm * precioKm;

let aplicaDescuento = diasEstancia > diasMin_Descuento && distancia > kmMin_Descuento;
// formula de operador terniario
let descuento = aplicaDescuento ? descuento_30 : 0;
// formula matematica
let precioFinal = precioBase * (1 - descuento);

console.log("--- PRECIO DEL BILLETE ---");
console.log("Distancia ida y vuelta:", totalKm, "km");
console.log("Precio base:", precioBase.toFixed(2), "euros");
if (aplicaDescuento) console.log("Descuento aplicado: 30%");
console.log("Precio final:", precioFinal.toFixed(2), "euros");