//// Formulario y sweetAlert

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);


function validarFormulario(e) {
    e.preventDefault();
    console.log("Mensaje Enviado!");
    Swal.fire({
        title: '<h2 class="sweet">MENSAJE ENVIADO!</h2>',
        confirmButtonColor: 'rgb(0, 0, 0)',
        confirmButtonText: '<h3 class="swee">SALIR</h3>',
        imageUrl: '../img/avatar6.jpg',
        imageWidth: 400,
        imageHeight: 400,})
}




/*let ingresarNombre = prompt("Ingresa tu Nombre");
let deseaJugar = prompt("Querés Jugar?: \n- Si \n- No");



if (deseaJugar == "Si") {
    let seleccionaPlataforma = prompt("Plataforma?: \n- Blue \n- Pink")
    alert(" Bienvenidx a  " + seleccionaPlataforma)
    for (let i = 1; i <= 2; i++) {

        if (i === 2) {
            alert("Apurate!!")
        }

        let ingresarJugadores = prompt("Número de jugadores por equipo")
        alert(" Ustedes son " + ingresarJugadores + "." + "\n Initializing:" + i)

    }
    alert("La sala está completa. Volvé más tarde")
}


if (deseaJugar == "No") {
    alert("Aún podés comprar tus SKINS")
}*/

/*class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre;
        this.precio  = precio;
    }
    
}

const productoA = new Producto("Annika", 2000);
const productoB = new Producto("Souka", 1500);
const productoC = new Producto("Razen", 1000);

let listaProductos = [productoA, productoB, productoC]
let nombreProductos =[]

function listarProductos(){
    for(const producto of listaProductos){
        nombreProductos.push(producto.nombre)
    }
}
listarProductos()


let elegirSkin = prompt("Selecciona la skin deseada: \n" + nombreProductos.join("\n"))
let cantidad = parseInt (prompt("Seleccione la cantidad de skins deseadas:" ))


const precioSkin = (skin, listaProductos) =>{
    let total = 0;

    for(let i = 0; i < listaProductos.length; i++){
        if( skin == listaProductos[i].nombre){
            total += listaProductos[i].precio
        }
    }
    return total;
}

let precios = precioSkin(elegirSkin, listaProductos);
console.log(precios);
let precioTotal = (cantidad * precios)



alert ("El precio total es: $" + precioTotal)

let descuento = prompt("Sorpresa?: \n- Si \n- No")

if (descuento == "Si") {
    alert("Tenés un descuento del 10%")
    var precioDescuento = precioDescuento(precioTotal)
    alert ("El precio total con descuento es es de: $" + precioDescuento)

}

function precioDescuento(precioTotal) {
    return precioTotal * 0.90
}


if (descuento == "No") {
    alert("Total a pagar: $" + precioTotal)
}
for (let producto of listaProductos) {
    let contenedor = document.createElement("div");
    //inner del elemento con plantilla de texto
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                            <p> Precio sin descuento por unidad : ${producto.precio}</p>
                            <p> Precio con descuento por unidad: ${producto.precio * 0.90}</p>`;
    document.body.appendChild(contenedor);
}*/
