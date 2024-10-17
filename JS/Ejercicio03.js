// objetos 


//imprimir el objeto 
//console.warn("---Objetos---");

//los objetos tambien ya pueden representarse en formato de tabla 
//console.table(producto);

//acceder a las propiedades de un objeto 
//console.warn("Leyendo las propiedades de un Objeto y sus tipos de datos")
//console.log(`El tipo de dato de nombre es: ${typeof(Nombre)}, Mac es del tipo: ${typeof(Marca)},Modelo es del tipo: ${typeof(Modelo)},costo de la compra es tipo: ${typeof(Costo_compra)},
//costo de venta es tipo: ${typeof(Costo_venta)}, Disponible es del tipo: ${typeof(Disponible)}`);


//objetos 
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,9) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg};color :white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold` 

const producto = 
{ 
    Nombre:"Tablet 9\"",
    Marca:"Mac",
    Modelo:"ipad",
    Precio:11500.25,
    Disponibilidad: 15,
    Stock: true,
    SKU: Symbol("Linkin Park"),
    Stock: 0,
    Barcode: null,
    Imagen: "sin imagen",
    Categoria: ["deporte","ropa"]
    
    
}

console.log("Repaso de Objetos en JavaScript");

console.log("%c1.- Variables independientes", style_console);

let Producto_Nombre = "Iphone pro Max  15\"";
let Producto_Marca = "Apple";
let Producto_Modelo = "pro Max";
let Producto_Precio= "20,000";
let Producto_Disponibilidad=true;
let Producto_SKU = Symbol("BACS230511-5FR");
let Producto_Stock= 15;
let Producto_Imagen = null;
let Producto_Barcode; 
let Producto_Categorias= ["Electronicos", "Hogar", "Accesorios","Ropa", "Tecnologia"];

console.log(`Los datos del Producto son:\n
    Nombre: ${Producto_Nombre}, su tipo de dato es <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, tipo de dato <${typeof(Producto_Marca)}> 
    Modelo: ${Producto_Modelo}, tipo de dato <${typeof(Producto_Modelo)}> 
    Precio: ${Producto_Precio}, tipo de dato <${typeof(Producto_Precio)}> 
    Disponibilidad: ${Producto_Disponibilidad}, tipo de dato <${typeof(Producto_Disponibilidad)}> 
    Stock: ${Producto_Stock}, tipo de dato <${typeof(Producto_Stock)}> 
    Barcode: ${Producto_Barcode}, tipo de dato <${typeof(Producto_Barcode)}> 
    Imagen: ${Producto_Imagen}, tipo de dato <${typeof(Producto_Imagen)}> 
    Marca: ${Producto_Marca}, tipo de dato <${typeof(Producto_Marca)}> 
    Categorias: ${Producto_Categorias}, tipo de dato <${typeof(Producto_Categorias)}>  `
);


console.log("En el caso del SKU al ser un symbol, no se puede concatenar a la cadena de impresión anterior");
console.log(Producto_SKU);
console.log(typeof(Producto_SKU));

console.log("%c2.- objeto", style_console);
let Producto =
{ 
    ID:3241,
    Nombre:"Tenis",
    Marca:"adidas",
    Modelo:"forum low",
    Precio:1500,
    Disponibilidad: 15,
    Stock: true,
    SKU: Symbol("Linkin Park"),
    Stock: 6,
    Barcode: null,
    Imagen: "sin imagen",
    Categoria: ["deporte","ropa","tenis"]
    
}

console.table(Producto)
 console.log("Accediendo a propiedades especificas del Producto")
 console.log(`Nombre completo del producto: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
 console.log(`Precio: ${Producto.Precio}`)
 if(Producto.Disponibilidad == 0)
5816,    console.log(`Estatus: Agotado`)
else 
console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);

console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2 ={

    ID:"1234",
Clave:321,
Nombre: "Gorra",
Marca:"adidas",
Modelo:"sayy",
Precio:250,
Disponibilidad: true,
Stock:5,
SKU:"df256s",
Imagen: "cdsfge",
Barcode:12368,
Categorias: ["ropa"],
}
 let Comprador =
 {
    ID:"4321",
    clave:445,
    Nombre:"Say",
    Apellidos:"Bautista",
    Tipo:"Frecuante",
    Correo:"2307@gb",
    PaisdeOrigen:"Mexico",
    SaldoActual:2000
 }

let pedido=
{
    ID:5816,
    producto_clave:345,
    comprador_clave:132,
    Cantidad:1,
    Estatus:"En espera",
    tipo_pago:"Transferencia"
}

let {Precio:Producto_Precio2}=Producto2;
let {Cantidad:pedido_Cantidad}=pedido;
let {SaldoActual:cliente_SaldoActual}=Comprador;
let Costo_compra=Producto_Precio2 * pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${pedido_Cantidad} Unidades con un costo total de: ${Costo_compra}`)
if(Costo_compra<cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente");


console.log("%c4.- Actualización de los valores de las propiedades", style_console);
console.log(`---------------------------------------------------------`)
console.log(`El objeto actualmente tiene los siguientes valores`)
let tipoDisponibilidad= typeof(Producto2.Disponibilidad)
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2, null, 2));
Producto2.Disponibilidad="si";
let nuevoTipoDisponibilidad= typeof(Producto2.Disponibilidad)
console.log(Producto2);
console.log(`El nuevo tipo de dato de la disponibilida es: ${nuevoTipoDisponibilidad}`)

//Agregar nuevas propiedades a un nuevo objeto existente 
console.log("%c5.- Agregacion de Propiedades de un objeto",style_console);
console.log("Objeto antes de ser modificado: ")
console.table(JSON.stringify(Comprador));

//Agregando propiedades 
Comprador[`Direccion`]= "Av. 05 de Mayo #23 esquina con Reforma, Xicotepec de Juarez Puebla, Mexico"
Comprador[`Tipo`]= "Premium"
Comprador[`Estatus`]= "Activo"
Comprador[`TotalCompras`]= "2000"
console.log("Objetos despues de ser modificado: ")
console.table(Comprador)

//Eliminar propiedades de un objeto existente 
console.log("%c6.- Eliminacion de propiedades de un objeto (MUTACIÓN)", style_console)
console.log("Objeto antes de ser modificado: ")
console.table(pedido)

delete pedido[`tipo_pago`];
console.log("Objeto despues de ser modificado: ")
console.table(pedido)

console.log("%c7.- Metodos para controlar la mutabilidad de los Objetos, congelación (FREEZE", style_console)


console.log(`La estructura actual del objeto COMPRADOR es: `)
console.table(Comprador)
Object.freeze(Comprador)
//intentaremos agregar, eliminar, o modificar los valores de sus propiedades
Comprador.FechaUltimaCompra = "05/09/2024 10:15:25"
delete Comprador.Tipo;
Comprador.Direccion= "calle 16 de Mayo";
console.log(`Verificamos si se realizan los cambios en el objeto Comprador:`)
console.table(Comprador)

console.log("%c8.- Metodos para controlar la mutabilidad de los objetos sellado (SEAL)", style_console);
console.log("Objeto antes de ser modificado: ")
console.table(pedido)

Object.seal(pedido)

pedido[`FechaPedido`]= "25/09/2024 10:25:15"
delete pedido[`Cantidad`]
console.log(`Verificamos si se realizaron los cambios de objeto PEDIDO:`)
console.table(pedido)

pedido.Cantidad=5
console.log(`Verificamos se se realizaron los cambios en el Objeto PEDIDO:`)
console.table(pedido)


//destructuracion de dos o mas objetos 
console.log("%c9,- Destructuración de 2 o mas objetos", style_console);
let{Precio:precioProducto , SKU:productoSku, Marca:productoMarca,}= producto
let{correo: clienteCorreo, Pais: clientePais, SaldoActual: clienteSaldo, Tipo:clienteTipo} =
Comprador

//Transformar valores cuantitativos en cualitativas 
if (precioProducto>2000)
    precioProducto= "caro"
else 
precioProducto = "barato"

if(clienteSaldo > 0)
    clienteSaldo="A favor"
else if(clienteSaldo < 0) 
clienteSaldo="En contra"
else 
clienteSaldo="sin deuda"
//transformar valores cualitativos en cuantitativo 

let clienteNivel;
if(clienteTipo=="premium")
    clienteNivel =1
if(clienteTipo== "freemium")
    clienteNivel=2
if(clienteTipo== "No identificado")
    clienteNivel=3 

//clasificamos al cliente por su país de origen 

if (clientePais == "México")
    clientePais="Nacional"
else 
clientePais="Extranjero"

//practica
//ole 
let datoClientePromociones={clienteCorreo,clientePais,clienteNivel,clienteSaldo,productoMarca,precioProducto}
console.log("los datos del cliente y sus habitps de compra son:")
console.table(datoClientePromociones)

//union de objetos 
console.log("%c10,- Unión de objetos usando el método de asignación (ASSING)", style_console);

console.log("Imprimir la estructura y valores del objeto de PRODUCTO")
console.table(Producto);

console.log("Imprimir la estructura y valores del objeto de PEDIDO")
console.table(pedido);



//suponiendo que el ususario ya realizó el pago el pedido se convertira en una VENTA que requiere información de ambos objetos 
let Producto3={...Producto}
const Venta = Object.assign(Producto3, pedido);
console.log("Consultamos este nuevo objeto VENTA")
console.table(Venta);

//Union de Objetos usando SPREAD OPERATOR para evitar la perdida de información con Objetos que comparten el mismo nombre en sus propiedades 

console.log("c11.- Unión de objetos usando el SPREAD OPERATOR (...) ",style_console);

console.table(Producto2);
console.table(Comprador);
console.table(pedido);

let Venta2 = 
{ 
    producto: {...producto},
    Comprador: {...Comprador},
    pedido: {...pedido}
}
console.log("Fusionamos los 3 Objetos en uno nuevo sin perdida de información")
console.table(Venta2);

const autenticado=true
const usuario="say"

console.log("Vamos a verificar el estatus mutabilidad del objeto PRODUCTO")
console.log(`Esta el objeto de pedido congelado? : ${Object.isFrozen(pedido)}`);
console.log(`Esta el objeto de pedido sellado? : ${Object.isSealed(pedido)}`);


console.log("Vamos a verificar el estatus mutabilidad del objeto PRODUCTO")
console.log(`Esta el objeto de pedido congelado? : ${Object.isFrozen(Comprador
)}`);
console.log(`Esta el objeto de pedido sellado? : ${Object.isSealed(Comprador)}`);


console.log("Vamos a verificar el estatus mutabilidad del objeto PRODUCTO")
console.log(`Esta el objeto de pedido congelado? : ${Object.isFrozen(producto)}`);
console.log(`esta el objeto de pedido sellado? : ${Object.isSealed(producto)}`);

Producto[`isLegacy`]=false;
console.log(producto)
console.log(Venta2);