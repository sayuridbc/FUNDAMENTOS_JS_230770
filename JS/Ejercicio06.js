//Repaso de ciclo y sentencias de control
// Estilizacion de los mensajes de salida
const bg="linear-gradient(11deg,rgba(0,199,36,1) 0%, rgba(192,255,26,1)33%, rgba(191,255,26,1) 86%)";
const style_console =`background: ${bg}; color:white; border-radius:6px; padding:4px; font-size: 1.0rem; font-weight: bold`
//Personalizacion de consola 
console.warn("Practica 7 : ARREGLOS EN JAVA SCRIPT")
console.log("%c1.- CONDICIONALES -SI/ENTONCES...(IF)", style_console);
let fechaActual=new Date();
console.log(`Hola la fecha de hoy es :${fechaActual.toString()}`);
const fechaLocal1MX =fechaActual.toLocaleString('es-MX',
    {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric',
        minute:'numeric',
        second:'numeric',
        hour12:false
    });
    console.log(`en formato local (Meéxico):${fechaLocal1MX}`);
    if(fechaActual.getHours()<12)
        console.log(`Buenos días , hoy es ${fechaLocal1MX}`);
    if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad de añoi`);
    else
    console.log(`Estas en la segunda mitad del año`);
     const anio=fechaActual.getFullYear();
     let inicioPrimavera =new Date(anio,2,21);
     let inicioVerano =new Date(anio,5,21);
     let inicioOtonio =new Date(anio,8,23);
     let inicioInvierno =new Date(anio,11,21);
     let estacion;
     let horarioVerano=false;
     if (fechaActual>= inicioPrimavera &&fechaActual<inicioVerano)
     {
        console.log("estamos en la primavera...")
        console.log("Inicia la floracion de muchas plantas...")
        console.log("los dias son mas largos y las noches mas cortas")
        console.log("Muchos animales despiertan de la hibernacion")
        estacion="primavera"
        horarioVerano=true;
        //
        //
     }
     else if (fechaActual>=inicioVerano &&fechaActual<inicioOtonio)
        {
        console.log("Estamos en verano...")
        console.log("En esta temporada los abundan los dias soleados y calurosos..-")
        console.log("En esta tempporada el indice de turismo vacacional sube...")
        console.log("Mucha gente busca realizar actividades al aire...")
        estacion="verano"
        horarioVerano=true;
     }
     else if (fechaActual>= inicioOtonio && fechaActual<inicioInvierno)
     {
        console.log("Estamos en Otoño..")
        console.log("Los arboles suelen cambiar de follaje")
        console.log("Se registran temperaturas mas")
        console.log("Los animales conmienzan con la hibiernacion")
     }