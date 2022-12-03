var sacha = {
    nombre: 'Sacha',
    apellido: "Smith",
    edad: 15,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

/*function imprimirSiEsMayorDeEdad (persona) {
    if (persona.edad > 17){
        console.log(${persona.nombre} es mayor de edad);        
    } else {
        console.log(${persona.nombre} es menor de edad);    
    }
}*/

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad (persona) {
    return persona.edad > MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad (persona) {
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);        
    } else {
        console.log(`${persona.nombre} es menor de edad`);    
    }
}