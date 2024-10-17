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
     console.log(`Dado que nacio en el año de 1992 soy de la generacion: ${asignaGeneracion(1992)}`);
     console.log("%c4.- Manejo de excepciones  (TRY/CATCH))", style_console);
     /**
      * En algunas oraciones existiran errores que no son culpa del programa, si no del usuario , la red,
      * el SO o incluso de un middlware., pero que si duda debemos controlar para evitar las fallas de ejecusion
      *  
      */
     console.log("caso 1");
     console.log("Intentamos dividir : 0/10, el resultado es: ");
     try{                    //intenta
        let result=0/10;     //dividir  entre un entero
        console.log(result)
     }
     catch(error)
     {
        console.log("Ocurrio un  error: "+error.message);
     }
     console.log("caso 2");
     console.log("Intentamos dividir : 10/0, el resultado es: ");
     try{                              //intenta
        let result=10/0;               //dividir  entre un entero
        console.log(result)
     }
     catch(error)
     {
        console.log("Ocurrio un  error: "+error.message);
     }
     console.log("caso 3");
     console.log("Intentamos dividir : a/10, el resultado es: ");
     try{                                //intenta
        let result="a"/10;               //dividir una letra entre un entero
        console.log(result)
     }
     catch(error)
     {
        console.log("Ocurrio un  error: "+error.message);
     }
     console.log("caso 4");
     console.log("Intentamos dividir: la variable : a/10, el resultado es: ");                       
     try{                              //intenta
        let result="a"/10;               //dividir  entre un entero
        console.log(result)
     }
     catch(error)
     {
        console.log("Ocurrio un  error: "+ error.message);
     }
     console.log("caso 5");
     console.log("Intentamos dividir el valor de la variable x/ el valor de la variabley,el resultado es:");
     try{                              //intenta
        let x=8, y=2, result= x/y;     //dividir una variable no definida entre 
        console.log(result)
     }
     catch(error)
     {
        console.log("Ocurrio un error:"+error.message);
     }
     console.log("%c5.- Control de ciclos (BREAK/CONTINUA))", style_console);
     /**
      * En algunas ocaciones sera importante detener un civlo de mnera 
      * abrubta para controlar casos especiales de un ciclo
      */
     console.log("Vamos a contar del uno al 10...")
     for(let num=1; num<=10; num++)
        console.log(num);
     console.log("Ahora necesitamos que si llegas al 7 pares de contar... suponiendo que solo por hoy es de mala suerte")
  for (num=1; num<=10;num++)
     if(num==7)
        break;
     else
     console.log(num);
  console.log("ahora necesitamps que si llegas al 7 te saltes eese numero y continues")
  for (num=1; num <=10; num++)
  {
     if(num==7)
     {
        continue;
     }
     console.log(num);
  }
  console.log("%c6.- Ciclo iterativo (FOR))", style_console);
  //Recorre de manera iterativa (i), de incremental o decremental
  console.log("Los dias de la semana son en orden ascendente son: ")
  let dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
  for(let i=0; i<dias.length; i++)
  console.log(dias[i])
  console.log("Ahora vamos a imprimir los meses en orden desendente...")
  const meses=["Enero","febrero","Marzo","abril","Mayo","junio","julio","Agosto","septiembre","octubre","noviembre","Diciembre"]
  for(let i=meses.length-1; i>=0; i--)
     console.log(meses[i]);
  console.log("%c7.- Ciclo Condicionales (WIHILE)", style_console);
  //Estos siclos(BUCKLE dependen de una condicion para continuar ejecutandose)
  let finDeSemana=false;
  let mensaje="";
  let j=0;
  //Usamos J para que coincida con el indice
  while(j<dias.length){
     switch(j){
        case 0:
           finDeSemana=true;
           mensaje="Mormingoo...Hora de dormir";
           break;
        case 1:
           finDeSemana=false;
           mensaje="San lunes a trabajar";
           break;
        case 2:
           finDeSemana=false;
           mensaje="Segundo dia de chamba a darle";
           break;
        case 3:
           finDeSemana=false;
           mensaje="hombligo de semana";
           break;
        case 4:
           finDeSemana=false;
           mensaje="juevebes";
           break;
        case 5:
           finDeSemana=false;
           mensaje="vebiernes";
           break;
        case 6:
           finDeSemana=false;
           mensaje="sabatodo";
           break;
     }
     //imprimir el nombre del dia y su mensaje 
     if (!finDeSemana)
     {
        console.log(`Dia: ${dias[j]}`);
        console.log(`Mensaje del dia: ${mensaje}`);
     }
     j++;
     console.log("%c8.-Ciclo condicionales, que se ejecuta al menos una vez (DOWHILE)", style_console);
     //Simulamos una lista de episodios de una temporada
     let episodios=[
        "Episodio 1:   hgh",
        "Episodio 2:  ghghg ",
        "Episodio 3: hghg",
        "Episodio 4: ghgh",
        "Episodio 5: hghg",
     ];
     let indice=0;
     let continuarViendo= true; // Esta variable del usuario de continuar leyendo
     
     do {
        console.log(`Reproduciendo${episodios[indice]}`);
         //simulamos la reproduccion del pisodio
       
        indice++;
         //simulamos una pregunta al usuario si desea seguir viendo
       if (indice < episodios.length) {
        continuarViendo = confirm("¿Deseas continuar con el siguiente episodio");
       }else{
        continuarViendo =false; ///Cuando se acaba de la lista de episodios 
       }
     }while (continuarViendo && indice < episodios.length);
     console.log("Fin de la Reproducción.");
  }