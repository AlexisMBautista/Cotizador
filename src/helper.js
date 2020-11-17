//calcula los años
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

//calcula la marca de carro
export function calcularMarca(marca){
    let incremento = 0; 

    switch(marca){
        case 'Americano': 
            incremento = 1.50; 
        break;
        case 'Europeo': 
            incremento = 1.30;
        break;
        case 'Asiatico': 
            incremento = 1.05;
        break;
        default: 
        break;
    }

    return incremento;
}

//calcular el tipo de seguro
export function calcularPlan(plan){
    return (plan === 'Basico') ? 1.20 : 1.50;
}