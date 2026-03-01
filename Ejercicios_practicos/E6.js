function estadisticaPesos(pesos) {
    const ordenados = [...pesos].sort((a, b) => a - b);
    const suma = pesos.reduce((a, b) => a + b, 0);

    return {
        total: pesos.length,
        promedio: suma / pesos.length,
        mediana: ordenados[Math.floor(ordenados.length / 2)],
        minimo: Math.min(...pesos),
        maximo: Math.max(...pesos),
        rango: Math.max(...pesos) - Math.min(...pesos)
    };
}

const pesosBase = [52, 68, 45, 72, 58, 85,];
console.log(estadisticaPesos(pesosBase));

