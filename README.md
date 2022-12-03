# Act4-Funciones-FuncionesAnonimas-FuncionesDeFlecha-EstructurasDeControl

## Lineas de codigo

## ArrowFuctions.js
Se declara un objeto llamado sacha
```javascript
var sacha = {
```
Se declara la variable nombre del objeto, cuyo valor es "Sacha"
```javascript
nombre: 'Sacha',
```
Se declara la variable apellido del objeto, cuyo valor es "Smith"
```javascript
apellido: "Smith",
```
Se declara la variable edad del objeto, cuyo valor es 26
```javascript
edad: 26,
```
Se declara la variable ingeniero del objeto, cuyo valor es true
```javascript
ingeniero: true,
```
Se declara la variable cocinero del objeto, cuyo valor es false
```javascript
cocinero: false,
```
Se declara la variable cantamnte del objeto, cuyo valor es false
```javascript
cantante: false,
```
Se declara la variable dj del objeto, cuyo valor es false
```javascript
dj: false,
```
Se declara la variable guitarrista del objeto, cuyo valor es false
```javascript
guitarrista: false,
```

Se declara la variable drone del objeto, cuyo valor es true
```javascript
drone: true
```
Se cierra el objeto
```javascript
}
```
Se abre para escribir un comentario. Se declara la funcion imprimirSiEsMayorDeEdad, con parametro de persona
```javascript
/*function imprimirSiEsMayorDeEdad (persona) {
```
Se declara un para comprobar si la edad de la persona en mayor a 17
```javascript
if (persona.edad > 17){
```
Este mensaje solo se mostrar si la condicion de if se cumple
```javascript
console.log(${persona.nombre} es mayor de edad);
```
Se cierra el if, y se abre un else
```javascript
} else {
```
Este mensaje solo se mostrara si la condicion del if no se cumple
```javascript
console.log(${persona.nombre} es menor de edad);
```
Se cierra el else
```javascript
}
```
Se cierra la funcion imprimirSiEsMayorDeEdad. Las lineas de ser un comentario
```javascript
}*/
```
Se declara una constante llamada MAYORIA_DE_EDAD con un valor 18
```javascript
const MAYORIA_DE_EDAD = 18;
```
Se abre para escribir lineas como comentario. Se declara la funcion esMayorDeEdad, y el parametro es persona
```javascript
/*function esMayorDeEdad (persona) {
```
Se regresara si la edad de la persona es mayor a MAYORIA_DE_EDAD
```javascript
return persona.edad > MAYORIA_DE_EDAD;
```
Se dejan de escribir lineas como comentarios
```javascript
}*/
```
Esto es un comentario
```javascript
//funcion anonima
```
Se abre para lineas como comentarios. Se declara una constante llamada a esMayorDeEdad que es igual a funcion(persona)
```javascript
/*const esMayorDeEdad = function (persona) {
```
Regresa si la edad de la persona es mayor a MAYORIA_DE_EDAD
```javascript
return persona.edad > MAYORIA_DE_EDAD;
```
Se cierra para dejar de escribir lineas como comentarios
```javascript
}*/
```
Esto es un comentario
```javascript
//Arrow function
```
Se declara una constante llamda a esMayor de edad que es igual a persona y es igual o mayor o que la edad de la persona que es mayor a MAYORIA_DE_EDAD
```javascript
const esMayorDeEdad = persona => persona.edad > MAYORIA_DE_EDAD;
```
Esto es un comentario. Se declara una constante llamada esMayorDeEdad2 que igual a la edad del objeto que es igual a mayor que edad que es mayor que MAYORIA_DE_EDAD
```javascript
//const esMayorDeEdad2 = ({edad}) => edad > MAYORIA_DE_EDAD;
```
Se declara una funcion llamada imprimirSiEsMayorDeEdad, y el parametro es persona
```javascript
function imprimirSiEsMayorDeEdad (persona) {
```
Se declara un if, con la condicion esMayorDeEdad(persona)
```javascript
if (esMayorDeEdad(persona)){
```
Este mensaje solo se mostrar si se cumple la condicion del if
```javascript
console.log(`${persona.nombre} es mayor de edad`);
```
Se cierra el if. Se abre el else el caso de que no se cumpla el if
```javascript
} else {
```
Este mensaje solo se mostrara si la condicion del if no se cumple
```javascript
console.log(`${persona.nombre} es menor de edad`);
```
Se cierra el else
```javascript
}
```
Se cierra la funcion
```javascript
}
```
Esto es un comentario
```javascript
//Crear una funcion que nos de acceso o no, segun la edad de la persona.
```
Esto es un comentario
```javascript
//Corregir la funcion
```
Se declara una funcion llamada permitirAcceso y el parametro es persona
```javascript
function permitirAcceso(persona) {
```
Se abre un if con la condicion !esMayorDeEdad(persona)
```javascript
if(!esMayorDeEdad(persona)){
```
Este mensaje solo se mostrara si la condicion del if se cumple
```javascript
console.log(`Acceso Denegado`);
```
Se cierra el if
```javascript
}
```
Se cierra la funcion llamada permitirAcceso
```javascript
}
```
Esto es un comentario
```javascript
//Elaborar funcion de flecha
```
Se declara una constante llamada Acceso_A_Persona que es igual a persona que eso es igual o mayor que la edad del objeto que es menor que MAYORIA_DE_EDAD
```javascript
const Acceso_A_Persona = persona => persona.edad < MAYORIA_DE_EDAD;
```
Se declara una funcion llamada OtorgarAcceso, el parametro es persona
```javascript
function OtorgarAcceso(persona){
```
Se declara un if con la condicion Acceso_A_Persona(persona)
```javascript
if(Acceso_A_Persona(persona)){
```
Este mensaje solo se mostrara si la condicion de if se cumple
```javascript
console.log(`Acceso Denegado`);
```
Se cierra el if
```javascript
}
```
Se Cierra la funcion llamada OtorgarAcceso
```javascript
}
```
## BucleDoWhile.js
Se decalara la variable la i, con el valor de 0
```javascript
var i = 0;
```
Se abre el do{} para escribir las instrucciones a repetir
```javascript
do {
```
A la variable i se le subara 1
```javascript
i += 1;
```
Este mensaje se mostrara en la consola, y dira "Este mensaje ya se reptio 1 veces" con cada repeticion i cambiara a un numero mas arriba
```javascript
console.log("Este mensaje ya se repitio "+ i + " veces");
```
Se cierra el do, se declara el while(condicion) si la condicion no se cumple se volvera a repetir el bucle, hasta que ya no se pueda cumplir la condicion
```javascript
} while (i < 5);
```
## BucleFor
Se declara en bucle for(condicion) Primero se declara la variable i con un valor de 1. Segundo se comprueba si la variable es menor a 9,. Por ultimo a la variable se le suma 1. Una vez que la condicion ya no se cumpla se acabara bucle
```javascript
for (var i = 1; i < 9; i++) {
```
Este mensaje se mostrara en la consola, y dira "Este mensaje ya se reptio 1 vez" con cada repeticion i cambiara a un numero mas arriba
```javascript
console.log("Este mensaje ya se repitio " + i + " vez");
```
Se cierra el bucle for
```javascript
}
```
## BucleWhile
Se declara la variable, en este caso se llama n, y su valor es 0
```javascript
var n = 0;
```
Se declara el bucle while, con su respectiva condicion
```javascript
while (n < 3) {
```
A la variable n se la suma 1
```javascript
n ++;
```
Este mensaje se mostrara en la consola, y dira "Este mensaje ya se reptio 1 vez" con cada repeticion n cambiara a un numero mas arriba
```javascript
console.log("Este mensaje ya se repitio " + n + " vez");
```
Se cierra el bucle While
```javascript
}
```
## Condicionales.js
Se declara un objeto llamado sacha
```javascript
var sacha = {
```
Se declara la variable nombre del objeto, con el valor de "Sacha"
```javascript
nombre: "Sacha",
```
Se declara la variable apellido del objeto, con el valor de "Smith"
```javascript
apellido: "Smith",
```
Se declara la variable edad del objeto, con el valor de 28
```javascript
edad: 28,
```
Se declara la variable ingeniero del objeto, con el valor de true
```javascript
ingeniero: true,
```
Se declara la variable cocinero del objeto, con el valor de false
```javascript
cocinero: false,
```
Se declara la variable cantante del objeto, con el valor de false
```javascript
cantante: false,
```
Se declara la variable dj del objeto, con el valor de false
```javascript
dj: false,
```
Se declara la variable guitarrista del objeto, con el valor de false
```javascript
guitarrista: false,
```
Se declara la variable drone del objeto, con el valor de true
```javascript
drone: true
```
Se cierra el objeto
```javascript
}
```
Esto es un comentario
```javascript
//Reto #1: Mostrar todas las profesiones de Sacha (Que sean true)
```
Esto es un comentario
```javascript
//Reto #2: Mostrar que Sacha no tiene dicha profesion: NO es dj
```
Esto es un comentario
```javascript
//Reto #3: Crear una funcion para saber si la persona es mayor de edad
```
Se declara la funcion reto1, con el parametro persona
```javascript
function reto1(persona){
```
Se muestra un mensaje en consola, el cual dira "Sacha es: "
```javascript
console.log(`${persona.nombre} es: `);
```
Se comprueba si la variable ingeniero es igual a true
```javascript
if (persona.ingeniero === true) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log("ingeniero")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable cocinero es igual a true
```javascript
if (persona.cocinero === true) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" cocinero")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable cantante es igual a true
```javascript
if (persona.cantante === true) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" cantante")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable dj es igual a true
```javascript
if (persona.dj === true) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" dj")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable guitarrista es igual a true
```javascript
if (persona.guitarrista === true) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" guitarrista")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable drone es igual a true
```javascript
if (persona.drone === true) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" drone")
```
Se cierra el if
```javascript
}
```
Se cierra la funcion llamada reto1
```javascript
}
```
Se ejecuta la funcion reto1, con el objeto sacha
```javascript
reto1(sacha);
```
Esto es un comenatario
```javascript
//reto2
```
Se declara la funcion reto2, con el parametro persona
```javascript
function reto2(persona){
```
Se muestra en consola un mensaje el cual dira "Sacha no es: "
```javascript
console.log(`${persona.nombre} no es: `);
```
Se comprueba si la variable ingeniero es igual a false
```javascript
if (persona.ingeniero === false) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log("ingeniero")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable cocinero es igual a false
```javascript
if (persona.cocinero === false) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" cocinero")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable cantante es igual a false
```javascript
if (persona.cantante === false) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" cantante")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable dj es igual a false
```javascript
if (persona.dj === false) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" dj")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable guitarrista es igual a false
```javascript
if (persona.guitarrista === false) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" guitarrista")
```
Se cierra el if
```javascript
}
```
Se comprueba si la variable drone es igual a false
```javascript
if (persona.drone === false) {
```
Este mensaje solo mostrar en consola si la condicion anterior es correcta
```javascript
console.log(" drone")
```
Se cierra el if
```javascript
}
```
Se cierra la funcion reto2
```javascript
}
```
Se ejecuta la funcion reto2 con el objeto sacha
```javascript
reto2(sacha);
```
Esto es un comentario
```javascript
//reto3
```
Se declara la funcion reto3, con el parametro persona
```javascript
function reto3(persona){
```
Se muestra un mensaje en consola, el cual dira "Smith Sacha tiene 28 años, por lo que es: "
```javascript
console.log(`${persona.apellido} ${persona.nombre} tiene ${persona.edad} años, por lo que es: `);
```
Comprueba si la variable edad es mayor o igual a 18
```javascript
if (persona.edad >= 18) {
```
Este mensaje se mostrara si la condicion anterior es correcta
```javascript
console.log("Mayor de edad");
```
Se cierra el if
```javascript
} 
```
En caso de que la condicion no se cumpla, se usara el else para dar una nueva instruccion
```javascript
else {
```
Este mensaje se muestra solo si la condicion del if es incorrecta
```javascript
console.log("Menor de edad");
```
Se cierra el else
```javascript
}
```
Se cierra la funcio reto3
```javascript
}
```
Se ejecuta la funcion reto3 con el objeto sacha
```javascript
reto3(sacha);
```
## Freturn.js
Se declara un objeto llamado sacha
```javascript
var sacha = {
```
Se declara la variable nombre del objeto, con el valor de "Sacha"
```javascript
nombre: "Sacha",
```
Se declara la variable apellido del objeto, con el valor de "Smith"
```javascript
apellido: "Smith",
```
Se declara la variable edad del objeto, con el valor de 15
```javascript
edad: 15,
```
Se declara la variable ingeniero del objeto, con el valor de true
```javascript
ingeniero: true,
```
Se declara la variable cocinero del objeto, con el valor de false
```javascript
cocinero: false,
```
Se declara la variable cantante del objeto, con el valor de false
```javascript
cantante: false,
```
Se declara la variable dj del objeto, con el valor de false
```javascript
dj: false,
```
Se declara la variable guitarrista del objeto, con el valor de false
```javascript
guitarrista: false,
```
Se declara la variable drone del objeto, con el valor de true
```javascript
drone: true
```
Se cierra el objeto
```javascript
}
```
Se abre para escribir lineas como comentarios. Se declara una funcion llamada imprimirSiEsMayorDeEdad con el parametro persona
```javascript
/*function imprimirSiEsMayorDeEdad (persona) {
```
Se declara un if para ver si la edad del objeto es mayor a 17
```javascript
if (persona.edad > 17){
```
Este mensaje solo se mostrara si la condicion del if se cumple
```javascript
console.log(${persona.nombre} es mayor de edad);
```
Se cierra el if. En caso de que el if no se cumpla se declara un else
```javascript
} else {
```
Este mensaje se mostrara solo la condicion del if no se cumple
```javascript
console.log(${persona.nombre} es menor de edad); 
```
Se cierra el else
```javascript
}
```
Se cierra la funcion imprimirSiEsMayorDeEdad. Se deja de escribir lineas como comentarios
```javascript
}*/
```
Se declara una constante llamada MAYORIA_DE_EDAD que es igual a 18
```javascript
const MAYORIA_DE_EDAD = 18;
```
Se declara un funcion llamada esMayorDeEdad con el parametro persona
```javascript
function esMayorDeEdad (persona) {
```
Se regresara si la edad del objeto es mayor que MAYORIA_DE_EDAD
```javascript
return persona.edad > MAYORIA_DE_EDAD;
```
Se cierra la funcio esMayorDeEdad
```javascript
}
```
Se declara una funcion llamada imprimirSiEsMayorDeEdad con el parametro persona
```javascript
function imprimirSiEsMayorDeEdad (persona) {
```
Se declara un if con la condicion esMayorDeEdad(persona)
```javascript
if (esMayorDeEdad(persona)){
```
Este mensaje solo se mostrara si la condicion del if se cumple
```javascript
console.log(`${persona.nombre} es mayor de edad`);
```
Se cierra el if. En caso de que la condicion del if no se cumpla se declara un else
```javascript
} else {
```
Este mensaje se solo mostra si la condicion del if no se cumple
```javascript
console.log(`${persona.nombre} es menor de edad`);
```
Se cierra el else
```javascript
}
```
Se cierra la funcion llamada esMayorDeEdad
```javascript
}
```
## Switch.js
Se declara una variable llamada a, con el valor de "azul"
```javascript
var a = "azul";
```
Switch tiene como parametro la varible a
```javascript
switch (a)
```
Se abre el Switch
```javascript
{
```
Comprueba si la varible es igual a "verde"
```javascript
case "verde":
```
Este mensaje se muestra si la variable a es igual al case "verder"
```javascript
console.log("El color es verde");
```
Break detendra las instrucciones del case
```javascript
break;
```
Comprueba que la variable es igual a "azul"
```javascript
case "azul":
```
Este mensaje se muestra si la variable es igual al case "azul"
```javascript
console.log("El color es azul");
```
Break detnedra las instrucciones del case
```javascript
break;
```
En caso de ningun case igual a la variable se usare el default
```javascript
default:
```
Este mensaje se usar si se tiene que usar el default
```javascript
console.log("No esta ese color");
```
Se cierra el Switch
```javascript
}
```
