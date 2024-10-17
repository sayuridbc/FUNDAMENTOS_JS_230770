// comentarios de una sola línea 

/* comentarios multi línea */

// Ejercicio 01 : Declración de variables 

// a) var

var say= "say "
var bautista;
var miEdad=18

// El objeto de console nos permite enviar datos a la terminal y poder visualizar el valor de una variable 

console.warn("--- Declaracion de variable usando: VAR");
console.log("Intentando leer las variables: ",say, bautista);


bautista = "Bautista"
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas :", say, bautista);
 
//una variable puede cambiar en el proceso de ejecución del programa.

// b) Cons tiene que tener un valor inicializable



console.warn("---Declaración de variables del tipo constante usando: CONST")
const miUniversidad = "UT Xicotepec";
const miMatricula=230770
console.log("Hola,", say,"",bautista,"se que estudias actualmente en :", miUniversidad, "asignaron la matricula:", miMatricula, "y tienes una edad de:", miEdad,"años");

//Para saber el tipo de dato que tiene una variable o constante podemos utilizar la función typeOf()

console.log("Analizando los datos puedo decir que:")
console.log("say es del tipo:", typeof(say))
console.log("bautista es del tipo:", typeof(bautista))
console.log("miUniversidad es del tipo:", typeof(miUniversidad))
console.log("miMatricula es del tipo:", typeof(miMatricula))
console.log("miEdad es del tipo:", typeof(miEdad)) 

// c) LET 
let miFechaNacimiento= "2005-11-25"; 
let miColorFavorito; 

console.warn("---Declaracion de variables Locales usando : LET" )
console.log("Genial, te voy conociendo mejor, ahora sé que tu naciste el:", miFechaNacimiento," y tu color favorito es : mmmm dejame pensar....")
miColorFavorito="Azul"; 
console.log(`creo que es ${miColorFavorito}, le atine?`) //

console.log("Analizando los datos puedo decir que:")
console.log("Tu color favoritio es tipo:", typeof(miColorFavorito))
console.log("Tu Fecha de nacimiento es del tipo:", typeof(miFechaNacimiento))