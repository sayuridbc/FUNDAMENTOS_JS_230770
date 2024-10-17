//Repaso de Ciclo y Sentencias de control 
//Estilizacion de los mensajes de salida 
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,26,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//personalizacion de  las salidas a consola 
console.warn("Practica 07: Arreglos en Java Script")

console.log("%c1.- Condicionales- Si/Entonces ... (if)", style_console);
//Le indica al programa que hacer o que no en vase a una prueba logica de verdadero o falso 
let fechaActual = new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

//Y si necesitamos en formato local?
const fechaLocalMX= fechaActual.toLocaleDateString(`es-mx`,
    {
        weekday: `long`, 
        year: `numeric`, 
        month:`long`,
        day: `numeric`,
        hour: `numeric`,
        minute: `numeric`,
        second: `numeric`,
        hour12:false
    });

    console.log(`En formato local (México): ${fechaLocalMX}`); 

    //si es antes de las doce saluda con buenos dias 
    if (fechaActual.getHours()<12)
        console.log(`Buenos días, hoy es: ${fechaLocalMX}`); 

    //  Existe un extensor de la sentencia if(si) que es else (en caso contrario)
    if(fechaActual.getMonth()<=6)
        console.log(`Estas en la primera mitad del año.`); 
    else 
    console.log(`Estas en la segunda mitad del año.`)

    //Que pasa si la validacion tiene varias operaciones 
    const anio = fechaActual.getFullYear();

    let inicioPrimavera = new Date(anio, 2,21); 
    let inicioVerano = new Date(anio, 5,21);
    let inicioOtono = new Date(anio, 8,23); 
    let inicioInvierno = new Date(anio, 11,21); 
    let estacion; 
    let horarioVerano= false; 
    
    if(fechaActual >= inicioPrimavera && fechaActual < inicioVerano)
    {
        console.log("Estamos en PRIMAVERA...")
        console.log("Inicia la Floración de muchas plantas...")
        console.log("Los días son mas largos y las noches mas cortas...")
        console.log("Muchos animales despiertan de la hibernación...")
        estacion="Primavera"
        horarioVerano=true;
    }
    else if(fechaActual >= inicioVerano && fechaActual < inicioOtono){
        console.log("Estamos en VERANO...")
        console.log("En esta remporada abundan los días soleados y calurosos...")
        console.log("El indice del turismo vacacional sube...")
        console.log("Mucha gente busca realizar actividades al aire libre...")
        estacion="Verano"
        horarioVerano= true;
    }
else if (fechaActual >= inicioOtono && fechaActual < inicioInvierno){
    console.log("Estamos en OTOÑO...")
    console.log("Los arboles empiezan a cambiar de follaje...")
    console.log("Se registran temperaturas templadas...")
    console.log("Los animales comienzan con la recoleccion de alimento y preparan sus espacio para la hibernacion...")
    estacion= "Otoño"
    horarioVerano = false;
}
else{
    console.log("Estamos en INVIERNO...")
    console.log("En esta estacion los dias son mas cortos y las noches mas largas...")
    console.log("En algunas regiones del planeta suelen nevar...")
    console.log("Dado a las bajas temperaturas, lo recomendado es abrigarse...")
    estacion= "Invierno"
    horarioVerano= false;
}

console.log("%c2.- Operador Ternario (Validacion:cumple:no_cumple", style_console);
const edadPersona = 20; 
const mayoreEdadMX= 18;
const mayorEdadUS= 21;

console.log("%c4.- Manejo de Excepciones (TRY/ CATCH", style_console);
//En algunas ocaciones existiran errores que no son culpa del programa, 
//si no del usuario, la red, el so o incluso de un middleware., pero que si duda debemos 
//controlar para evitar las fallas de ejecucion.


                    //CASO 1
console.log("Intentamos dividir : 0/10, el resultado es:")

try{
    let result= 0/10;
    console.log(result)
}
    catch(error)
    {
        console.log("Ocurrio un error: "+error.message);
    }
                      //CASO 2
    console.log("Intentamos dividir : 10/0, el resultado es:")

try{
    let result= 10/0;
    console.log(result)
}
    catch(error)
    {
        console.log("Ocurrio un error: "+error.message);
    }
                      //CASO 3
    console.log("Intentamos dividir : a/0, el resultado es:")

try{
    let result= "a"/0;
    console.log(result)
}
    catch(error)
    {
        console.log("Ocurrio un error: "+error.message);
    }
                       //CASO 4

    console.log("Intentamos dividir : la variable a /10, el resultado es:")

try{
    let result= a/10;
    console.log(result)
}
    catch(error)
    {
        console.log("Ocurrio un error: "+error.message);
    }

                        //CASO 5
    console.log("Intentamos dividir : el valor de la varible x / entre el valor de la variable y, el resultado es:")

try{
    let x=8, y=2, result= x/y;
    console.log(result)
}
    catch(error)
    {
        console.log("Ocurrio un error: "+error.message);
    }

    console.log("%c5.- Control de ciclos (BREAK/ CONTINUE", style_console);

    console.log("Vamos a contar del 1 al 10...")
    for(let num=1; num <=10; num++)
    console.log(num); 

    console.log("Ahora necesitamos que si llegas al 7 pares de contar... suponiendo que solo hoy es de mala suerte...")
    for(num=1; num <=10; num++)
    if(num ==7)
    break;
else
console.log(num);
//console.log 
console.log("Ahora necesitamos que si llegas al 7 te saltes ese numero y continues")
for(num=1; num<=10; num++)
{
    if(num==7)
    continue;
else
console.log(num);
}

console.log("%c6.- Ciclo Iterativo - (FOR)", style_console);

console.log("Los dias de la semana son de orden ascendente son:")
let dias=["Domingo","lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

for(let i=0; i<dias.length; i++)
console.log(dias[i]) 

console.log("Los meses en orden descendente son: ...")
const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

for(let i=meses.length-1; i>=0; i--)
console.log(meses[i]);

console.log("%c7.- ciclo condicionales (WHILE", style_console);

let FinDeSemana = false; 
let mensaje = ""; 
let j =0;

while (j < dias.length){
switch (j) {
    case 0: 
    FinDeSemana = true;
    mensaje = "Ya es Momingooo"; 
    break; 

    case 1: 
    FinDeSemana = false; 
    mensaje = "San lunes a chambiar..."; 
    break; 

    case 2: 
    FinDeSemana = false; 
    mensaje = "Animoo Segundo dia de chamba";
    break; 

    case 3:
        FinDeSemana= false; 
        mensaje= " Ombligo de semana ...";
        break; 

    case 4: 
        FinDeSemana = false; 
        mensaje = "Ya es Juevebessssss"; 
        break; 

 case 5: 
        FinDeSemana=false;
        mensaje= "Por fin es viernes "
        break; 

 case 6:
            FinDeSemana= false; 
            mensaje= "Llegamos a fin de semana";
            break;
}
if (!FinDeSemana)
{
    console.log(`Día: ${dias[j]}`);
    console.log(`Mensaje del dia: ${mensaje}`);
}
j++;
}


console.log("%c8.- ciclo condicionales, que se ejecutan al menos una vez - (DO WHILE)", style_console);

let episodios = [
    "Episodio 1: Un caso de homicidio",
    "Episodio 2: La entrevista",
    "Episodio 3: Por primera vez",
    "Episodio 4: Pip y Ravi",
    "Episodio 5: La confesion",
    "Episodio 6: Caso solucionado",
];

let indice = 0;
let continuarViendo = true; 

do {
    console.log(`Reproduciendo ${episodios[indice]}`)
    indice++;

    if(indice < episodios.length){
        continuarViendo = confirm("Deseas continuar con el siguiente episodio?"); 
}else{
    continuarViendo = false; 
}
}while (continuarViendo && indice < episodios.length);
console.log("Fin de la reproduccion.");

//ciclo para recorrer objetos iterables como mapas, arreglos, cadenas y conjuntos de datos 
console.log("%c9.- ciclo para recorrer elementos finitos (FOR ...OF", style_console);

let seriesTrending = [
    { nombre: "The umbrella Academy", temporadas: 3, totalViewers: "1.0M", totalReprods: "5.0M"},
    { nombre: "Control Z", temporadas: 2, totalViewers: "1.50M", totalReprods: "2.0M"},
    { nombre: "Asesinato Para Principiantes", temporadas: 1, totalViewers: "1.0M", totalReprods: "1.0M"},

];
  
for(let serie of seriesTrending){
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.Temporadas}`);
}
try {
    console.log(`La ultima serie leida fue: ${serie.nombre}`);
}
catch(error)
{
    console.log("Mensaje de error: "+error.message)
}
console.log("%c10,- Ciclos para recorrer las propiedades de elmentos finitos-(FOR..IN", style_console); 

for (let i in seriesTrending) {
    console.log(`Serie ${parseInt(i)+1}:`);
    for (let propiedad in seriesTrending[i]){
        console.log(`${propiedad}: ${seriesTrending[1][propiedad]}`);
    }
    console.log(`--------------------`); 

}
console.log("%c11.- ciclos ininterrumpidos para cada uno de los elementos del arreglo (FOR EACH)", style_console);

let seriesTrending2 = [
    {nombre: "The Witcher", temporadas:4, viewers: 800000, reproducciones:25000},
    {nombre: "Stranger Things", temporadas:5, viewers: 500000, reproducciones:25000},
    {nombre: "The Boys", temporadas:3, viewers: 600000, reproducciones:25000},
    {nombre: "Loki", temporadas:3, viewers: 300000, reproducciones:25000},
    {nombre: "Succession", temporadas:6, viewers: 700000, reproducciones:25000},
];

seriesTrending.forEach((serie,index )=> {
    let calificacion = (serie.reproducciones / serie.viewers).toFixed(2);


    console.log(`Serie: ${index + 1}:`);
    console.log(`Nombre: ${serie.nombre}:`);
    console.log(`Temporada: ${serie.temporadas}:`);
    console.log(`Viewers: ${serie.viewers}:`);
    console.log(`Reproducciones: ${serie.reproducciones}:`);
    console.log(`Calificacion: ${calificacion}:`);
    console.log(`-------------`);

});

let seriesDeseadas = ["The Whitcher", " the boys", " loki"];

let seriesConTresTemporadas = seriesTrending2
.filter(serie => serie.temporadas <=3 )
.map(serie => serie.nombre)
.filter(nombre => seriesDeseadas.includes(nombre)); 

console.log("Series con tres temporadas que estan en la lista deseada:");
console.log(seriesConTresTemporadas);

//fin de prac05