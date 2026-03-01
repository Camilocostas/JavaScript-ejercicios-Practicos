function diaSiguiente(dia, mes, año) {
    const fecha = new Date(año, mes - 1, dia);
    
    if (fecha.getFullYear() !== año || 
        fecha.getMonth() !== mes - 1 || 
        fecha.getDate() !== dia) {
        return "Fecha inválida";
    }
    
    fecha.setDate(fecha.getDate() + 1);
    
    return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;                                                                                                                               
}

console.log(diaSiguiente(31, 1, 2024));  