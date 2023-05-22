const pPrecioTotal = document.querySelector("#precio-total");
const selectCantidad = document.querySelector("select");
const olCarrito = document.querySelector("#carrito");
const fsContenedorProducto = document.querySelector("#contenedor-producto");

const PRECIO_PROD_1 = 500;
const NOMBRE_PROD_1 = "Pan";
const PROD_1_DESCUENTO_1 = 10;
const PROD_1_DESCUENTO_2 = 25;

const PRECIO_PROD_2 = 200;
const NOMBRE_PROD_2 = "Factura";
const PROD_2_DESCUENTO_1 = 15;
const PROD_2_DESCUENTO_2 = 30;
const PROD_2_CANT_EXTRA_REGALO = 1;

let precioProductoActual = PRECIO_PROD_1;
let nombreProductoActual = NOMBRE_PROD_1;

let precioTotal = 0;

function agregarProducto() {
    let cantidad= selectCantidad.value;
    switch (cantidad) {
        case 3:
            
            break;
    
        default:
           alert("Error");
           break;
    }
    precioTotal =((precioProductoActual) *(100-10) /100) * selectCantidad.value)) + precioTotal;
    pPrecioTotal.innerHTML = "Total: $" + (precioTotal);
    olCarrito.innerHTML += `<li> ${nombreProductoActual} (${selectCantidad.value})</li>`;
}

function pasarProducto() {
    fsContenedorProducto.innerHTML = `
    <img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/factu_tgT5LkaHZGSI7qnfimJzOrvRWEu4sK-1024x683.png.webp">
          <p>Factura</p>
          <p>PRECIO: $200</p>
    `;
    precioProductoActual = PRECIO_PROD_2;
    nombreProductoActual = NOMBRE_PROD_2;
}