
let menu = "Ingrese una opcion:" + "\n" + "\n1-Listado Productos" + "\n2-Seleccion de productos" + "\n3-Calcular Iva" + "\n4-Precio con Iva" + "\n5-Seleccionar Forma de pago" + "\n10-Salir"
let seleccion = parseInt(prompt(menu));
let precioSinIva = 0
let iva = 0
let precioConIva = 0
let formaPago = 0
let aPagar = 0
let listaproductos = 'Listado de Productos: \n \n1-Amortiguadores $19500\n2-Espirales $8000\n3-Pastillas de Freno $5000\n4-Discos de Frenos $9000\n5-Kit para Service Aceite $22000\n6-Cree Led $4000'
while (seleccion != 10) {
    switch(seleccion) {
        case 1:
            productos()
            break;
        case 2:
            precioSinIva = seleccionar()
            alert("El Precio Costo Total Sin Iva es: " +precioSinIva);
            break;
        case 3:
            iva = calcularIva(precioSinIva)
            alert("El Iva de los productos seleccionados es: " + iva);
            break;
        case 4:
            precioConIva = precioTotalCIva(iva,precioSinIva)
            alert("El precio de los productos con iva incluido es: " + precioConIva);
            if (precioConIva >= 30000) {
                alert("Por superar la suma de $30.000 el envio es GRATIS");
            }
            else {
                alert("El envio corre a cuenta del COMPRADOR");
            }
            break;
        case 5:
            calcularCuotas()
            break    
        default:
            break;
    
    }
        seleccion = parseInt(prompt(menu));
    }

// FUNCION PRODUCTOS 

function productos() {
    alert(listaproductos);
}

// FUNCION SELECCION PRODUCTOS

function seleccionar() {
    let acumulador = 0
    let n = parseInt(prompt("Ingrese la cantidad de productos que desea comprar"));
    for (i=1 ; i <= n ; i++) {
        precioCosto = parseFloat(prompt("Ingrese el precio Costo del producto numero: " + i + "\n" +  listaproductos));
        acumulador = acumulador + precioCosto;
    }
        //alert("Precio Costo Total: " + acumulador);
        return acumulador

}

// FUNCION CALCULAR IVA

function calcularIva(precio) {
    return (precio * 0.21)
}

// FUNCION CALCULAR PRECIO COSTO CON IVA

function precioTotalCIva(iva1, preciosiniva1) {
    return (iva1 + preciosiniva1)
}

//FUNCION CALCULO DE CUOTAS

function calcularCuotas() {
    formaPago = parseInt(prompt("Ingrese la cantidad de cuotas:" + "\n" + "\n1- Efectivo (10% Descuento)" + "\n2- 3 Cuotas" + "\n 3- Ahora 6" + "\n 4- Ahora 12"));    
            if (formaPago == 1) {
               aPagar = precioConIva * 0.9;
               alert("Debe Abonar: $" + aPagar);
            }
            else if (formaPago == 2) {
                aPagar = (precioConIva / 3);
                alert("Debe abonar 3 cuotas de: $" +aPagar +"cada una");
            }
            else if (formaPago == 3) {
                aPagar = (precioConIva / 6);
                alert("Debe abonar 6 cuotas de: $" +aPagar +"cada una");
            }
            else if (formaPago == 4) {
                aPagar = (precioConIva / 12);
                alert("Debe abonar 12 cuotas de: $" +aPagar +"cada una");
            }
}











