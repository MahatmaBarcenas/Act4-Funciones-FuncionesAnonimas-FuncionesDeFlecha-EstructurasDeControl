# Act4-Funciones-FuncionesAnonimas-FuncionesDeFlecha-EstructurasDeControl

## Lineas de codigo

## ArrowFuctions.js
var sacha = {
    nombre: 'Sacha',
    apellido: "Smith",
    edad: 26,
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

/*function esMayorDeEdad (persona) {
    return persona.edad > MAYORIA_DE_EDAD;
}*/

//funcion anonima
/*const esMayorDeEdad = function (persona) {
    return persona.edad > MAYORIA_DE_EDAD;
}*/

//Arrow function
const esMayorDeEdad = persona => persona.edad > MAYORIA_DE_EDAD;

//const esMayorDeEdad2 = ({edad}) => edad > MAYORIA_DE_EDAD;


function imprimirSiEsMayorDeEdad (persona) {
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);        
    } else {
        console.log(`${persona.nombre} es menor de edad`);    
    }
}

//Crear una funcion que nos de acceso o no, segun la edad de la persona.
//Corregir la funcion

function permitirAcceso(persona) {
    if(!esMayorDeEdad(persona)){
        console.log(`Acceso Denegado`);
    }
}

//Elaborar funcion de flecha

const Acceso_A_Persona = persona => persona.edad < MAYORIA_DE_EDAD;

function OtorgarAcceso(persona){
    if(Acceso_A_Persona(persona)){
        console.log(`Acceso Denegado`);  
    }
}
## BucleDoWhile.js
var i = 0;
do {
    i += 1;
    console.log("Este mensaje ya se repitio "+ i + " veces");
 } while (i < 5);
## BucleFor
for (var i = 1; i < 9; i++) {
    console.log("Este mensaje ya se repitio " + i + " vez");
  }
## BucleWhile
var n = 0;
while (n < 3) {
  n ++;
  console.log("Este mensaje ya se repitio " + n + " vez");
}
## Condicionales.js
var sacha = {
	nombre: "Sacha",
	apellido: "Smith",
	edad: 28,
	ingeniero: true,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true
}
//Reto #1: Mostrar todas las profesiones de Sacha (Que sean true)
//Reto #2: Mostrar que Sacha no tiene dicha profesion: NO es dj
//Reto #3: Crear una funcion para saber si la persona es mayor de edad

function reto1(persona){
	console.log(`${persona.nombre} es: `);

		if (persona.ingeniero === true) {
			console.log("ingeniero")
		}

		if (persona.cocinero === true) {
			console.log(" cocinero")
		}

		if (persona.cantante === true) {
			console.log(" cantante")
		}

		if (persona.dj === true) {
			console.log(" dj")
		}

		if (persona.guitarrista === true) {
			console.log(" guitarrista")
		}

		if (persona.drone === true) {
			console.log(" drone")
		}
}
reto1(sacha);

//reto2

function reto2(persona){
	console.log(`${persona.nombre} no es: `);

		if (persona.ingeniero === false) {
			console.log("ingeniero")
		}

		if (persona.cocinero === false) {
			console.log(" cocinero")
		}

		if (persona.cantante === false) {
			console.log(" cantante")
		}

		if (persona.dj === false) {
			console.log(" dj")
		}

		if (persona.guitarrista === false) {
			console.log(" guitarrista")
		}

		if (persona.drone === false) {
			console.log(" drone")
		}
}
reto2(sacha);

//reto3

function reto3(persona){
	console.log(`${persona.apellido} ${persona.nombre} tiene ${persona.edad} años, por lo que es: `);

	if (persona.edad >= 18) {
		console.log("Mayor de edad");
	} 

	else {
		console.log("Menor de edad");
	}
}

reto3(sacha);
## Freturn.js
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
## Switch.js
var a = "azul";
switch (a)
{
    case "verde":
        console.log("El color es verde");
        break;
    case "azul":
        console.log("El color es azul");
        break;
    default:
        console.log("No esta ese color");
}
