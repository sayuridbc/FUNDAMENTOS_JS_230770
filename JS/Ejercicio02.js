//Tipos de datos en JS

// 1.Undefined 
let cliente; 
let Premium;
console.log(`El cliente es: ${cliente}`); 
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)} `);

cliente = "Juan";

console.log(`El cliente es: ${(cliente)}`);

cliente = "123";

console.log(`El cliente es: ${(cliente)}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)} `);
 
// 2. Boolean 
console.warn("--- Tipo de Dato : BOOLEAN (Boleano - True/ False)");

let esPremium = "No lo se";

console.log(`¿Es el cliente Premium? : ${Premium}`);

console.log(`El tipo de dato de la variable Premium es: ${typeof(Premium)} `);

Premium=true;
console.log(`El tipo de la variable Premium es : ${typeof(Premium)}`);
if(Premium)
console.log ("El cliente pago por usar el servicio");
else
 console.log("El cliente pago por usar el servicio");
 console.log(`¿Es el cliente Premium? : ${Premium}`);
 console.log("cambiando el valor de Premium a false");
 Premium = false;
 if(Premium)
console.log("El cliente pago por usar el servicio");
else{
    console.log("El cliente no pago por usar el servicio");
}

//3. NUMBER
var cantidad
const costo_producto=10.50
let saldo_cuenta=-2500.40
let monto_trasaccion;

console.warn("-tipo de dato NUMBER (Numeros positivos , neghativos,decimaeles,flotantes");
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (tipo de dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta :${costo_producto}`)
cantidad=8;
console.log(`as elegido comprar :${cantidad} de productos.`)
console.log(`El importe total de la compra es ${(cantidad*costo_producto)}`)
saldo_cuenta=saldo_cuenta-(cantidad*costo_producto);
console.log(`tu nuevo saldo es de ${saldo_cuenta}`);
//El cliente realiza uin abono de 1500
monto_trasaccion=1500;
console.log (`tu abono de ${monto_trasaccion} a sido asignada tu nuevbo saldo es de :${(saldo_cuenta+monto_trasaccion)}`);


//BIGINT ENTEROS de dimesoines amplias 
console.warn("---Tipo de dato - BIGINT (Número amplio");
let numeroGrande = 1234567890
let numeroGrande2 = 1234567899511
let numeroGrande3 = 1233697125584556899
let numeroGrande4 = 1592634784562587456978745

console.log(`El primero experimento de un numero grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`)
console.log(`El segundo experimento de un numero grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`)
console.log(`El tercer experimento de un numero grande es: ${numeroGrande3}, ya no es soportado por NUMBER ya que hay perdida de presición, y su tipo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El cuarto experimento de un numero grande es: ${numeroGrande4}, ya no es soportado por NUMBERya que hay perdida de presición, y su tipo de dato es: ${typeof(numeroGrande4)}`)

//Para definir el tipo de dato BigInt debemos invocar la función BigInt o usar una letra "n" al final del numero en la asignacion de valor.
console.log("Declaramos los valores númericos gran tamaño...")
numeroGrande3 = BigInt ( 1233697125584556899);
numeroGrande4 = 1592634784562587456978745n;

console.log(`El segundo experimento de un numero grande es: ${numeroGrande3}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El segundo experimento de un numero grande es: ${numeroGrande4}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande4)}`)


//Hay que considerar que los tipos de datos declarados cómo BigInt no son operables con los tipos NUMBER 

let numero = 238; 

//Si intentamos realizar una operacion matemática entre estos dos tipos de datos, obtendremos un error critico 

console.log(`El resultado de la operación de: numeroGrande4/ numero es = a : ${numeroGrande4/BigInt(numero)}`);

console.log()

//Symbol 
console.warn("---Tipo de dato - Symbol (Simbolo o Forzar la Unicidad");
const numero1 = 2 
const numero2 = 2.0;
const numero3 = "2";
const numero4 = "2.0";
const numero5 = Symbol (2);
const numero6 = Symbol (2.0);
const numero7 = Symbol ("2");
const numero8 = Symbol ("2.0");
const numero9  =Symbol (2);
//Prueba de comparación 1:
console.log("Prueba de comparación 1:")
if(numero1 == numero2)
{
    console.log(`Se han comparado los valores de numero1 y numero2,  confirmado que tienen el mismo valor.`)
}
else 
console.log(`Se han comparado los valores de numero1 y numero2, detectando que No tienen el mismo valor.`)

//prueba de comparación 2: ¿es 2 = "2"?
if (numero1 == numero3)
{
    console.log(`Se han comparado los valores de numero1 y numero3,  confirmado que tienen el mismo valor.`)
}
else
console.log(`Se han comparado los valores de numero1 y numero2, detectando que no tienen el mismo valor.`)

//prueba de comparación 3: 
if (numero1 === numero3)
    {
        console.log(`Se han comparado los valores de numero1 y numero3,  confirmado que tienen el mismo valor.`)
    }
    else
    console.log(`Se han comparado los valores de numero1 y numero3, detectando que no tienen el mismo valor.`)
    
//prueba de comparacion 4: ¿es 2 = "2.0"?
console.log("Prueba de comparación 4: es 2= 2.0")
if (numero1 == numero4)
    {
        console.log(`Se han comparado los valores de numero1 y numero4,  confirmado que tienen el mismo valor.`)
    }
    else
    console.log(`Se han comparado los valores de numero1 y numero4, detectando que no tienen el mismo valor.`)
    
    //prueba de coparación 5
    if (numero1 === numero4)
        {
            console.log(`Se han comparado los valores de numero1 y numero4,  confirmado que tienen el mismo valor.`)
        }
        else
        console.log(`Se han comparado los valores de numero1 y numero4, detectando que no tienen el mismo valor.`)
        
//prueba de comparación 6 
console.log("Prueba de comparación 6: es 2 = symbol(2)")
if (numero1 === numero5)
    {
        console.log(`Se han comparado los valores de numero1 y numero5,  confirmado que tienen el mismo valor.`)
    }
    else
    console.log(`Se han comparado los valores de numero1 y numero5, detectando que no tienen el mismo valor.`)
    
//prueba de comparación 7
if (numero5 == numero7)
    {
        console.log(`Se han comparado los valores de numero5 y numero7,  confirmado que tienen el mismo valor.`)
    }
    else
    console.log(`Se han comparado los valores de numero5 y numero7, detectando que no tienen el mismo valor.`)
    
//prueba de comparacion 8
if (numero5 == numero9)
    {
        console.log(`Se han comparado los valores de numero5 y numero9,  confirmado que tienen el mismo valor.`)
    }
    else
    console.log(`Se han comparado los valores de numero5 y numero9, detectando que No tienen el mismo valor.`)
    
// 7.Null
console.warn("---Tipo de dato - Null (Nulo o Vacío");
//El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la varibale pero prefieren dejarlo vacío, bajo su consentimiento, a diferencia de UNDEFIEND que es 
//un valor desconocido asigando pot default pot JS.

let nombreUsuario= null; 
let passUsuario = null; 
let generoUsuario = null; 
let estatusRelacionSentimental= null; 
let fecha_UltimoPost;

//Supongamos que estamos programando una red social, tipo Facebook, en la que parte de la información se publicara en ele perfil del usuario 

//si el usuario no ha iniciado sesión en el dispositivo móvil o en la apicación web, pueden explorar contenido 

//En la Hu (Historial de Usuarios), que el 

//supongamos que el usuario: Sayurid Bautista Cruz con le correo electronico 230770@utxicotepec.edu.mx desea ingresar con sus contraseña 
//12345

nombreUsuario = "Sayurid B.C";
passUsuario = "pass123";

//en este momento de ejecucion del sistema no sabemos su genero 

console.log(`El usuario: ${nombreUsuario} esta intnetando logearse con una contaseña de ${passUsuario}`);


//Lo que prosigue es que el sistema cotejara los datos ingresados con la base de datos y en caso de que los 
generoUsuario="F"
estatusRelacionSentimental=null 

console.log(`El usuario: ${nombreUsuario}, se ha logeado exitosamente, al tener acceso  a su  información de perfil podemos deducuir que es del genero ${generoUsuario},
    y que su estatus de la relación es: ${estatusRelacionSentimental} y su ultima publicacion la realizo el : ${fecha_UltimoPost}`);


// comparando NULL y UNDEFINED 
// si bien undefined y NULL tienen el mismo valor, no tiene el mismo tipo de dato 

console.log("Comparacion de la equidad entre Undefined y Null:")
console.log(
(fecha_UltimoPost==estatusRelacionSentimental) ?

"Ambas variables tienen el mismo valor" :
"La variables No tienen el mismo valor"
);

console.log("Comparacion de la identidad entre Undefined y Null:")
console.log(
(fecha_UltimoPost === estatusRelacionSentimental) ?

"Ambas variables tienen el mismo valor" :
"Ambas variables No tienen el mismo valor"
);

//8.FUNCTION (Funciones)
//Declaramos una funcion que nos permitira recibir un parametro en este caso el nombre 
//de la persona a saludar, y le enviamos un saludo, esta funcion le asignamos una constante

console.warn("---Tipo de dato - Function (Funcion)");

const saludar = function(nombre){return `Hola, ${nombre}`}

console.log(saludar(`Say`)); 

console.log(`El Tipo de dato de la constante saludar es: ${typeof(saludar)}`);