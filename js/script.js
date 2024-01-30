//ctrl + K + C para comentar lineas
//ctrl + K + U para descomentar lineas

//Creo Array de los autos disponibles
const autos = [
    {id:1, marca: "Toyota", modelo: "Yaris", anio: "2022", precio: 65000},
    {id:2, marca: "Toyota", modelo: "Etios", anio: "2022", precio: 50000 },
    {id:3, marca: "Renault", modelo: "Sendero", anio: "2023", precio: 47000 },
    {id:4, marca: "Nissan", modelo: "Versa", anio: "2023", precio: 71000 },
    {id:5, marca: "Renault", modelo: "Logan", anio: "2022", precio: 53000 },
    {id:6, marca: "Toyota", modelo: "Hilux", anio: "2022", precio: 124000 },
    {id:7, marca: "Chevrolet", modelo: "Tracker", anio: "2022", precio: 112000 },
    {id:8, marca: "Chevrolet", modelo: "Cruze", anio: "2022", precio: 67000 },
]

class Carrito {
    constructor() {
        this.autos = [];
        this.descuento = 10;
        this.maxDiasParaDescuento = 3;
        this.totalPagar = 0;
    }

    agregarAuto(id) {
        let auto = autos.find(autoid => autoid.id === id);
        console.log(auto);

        if (auto) {
            this.autos.push(auto);
            console.log("Agregaste el Auto #" + id + " al Carrito!");
        } else {
            console.log("No se encontró el Auto: #" + id + "!");
        }
    }
    
    listarCarrito() {
        let salida = "";
    
        this.autos.forEach(item => {
            salida += item.id + " - " + item.marca + " - " + item.modelo + " - $" + item.precio+ "\n";
        })
    
        return salida;
    }
    calcularTotalAutos() {
        return this.autos.length;
    }

    aplicarDescuento() { //Si tengo 3 o más productos en mi Carrito, aplico un descuento
        if (this.calcularTotalAutos() >= this.maxDiasParaDescuento) {
            return Math.round((this.calcularTotalPagar() * this.descuento) / 100);
        } else {
            return 0;
        }
    }
    
    calcularTotalPagar() {       
        return this.autos.reduce((acumulador, item) => acumulador += item.precio, 0);
    }
}

function listarProductos() {
    let salida = "";

    autos.forEach(item => {
        salida += item.id + " - " + item.marca + " - " + item.modelo + " - $" + item.precio + "\n";
    })

    return salida;
}

//Ejecuto el programa
//Solicito nombre del cliente
let nombreYapellido = prompt("Bienvenido a MDZ Car Rent \nIngrese su nombre y apellido")

const carrito = new Carrito();
let opcionSeleccionada = 1;

while (opcionSeleccionada != 0) {
    opcionSeleccionada = parseInt(prompt("Seleccione el producto a agregar al Carrito: (0 para Salir)\n\n" + listarProductos()));

    if (opcionSeleccionada == 0) {
        break;
    }

    carrito.agregarAuto(opcionSeleccionada);
}

let productosCarrito = "Detalle:\n" + carrito.listarCarrito();
let salidaSubTotal = "Subtotal: $" + carrito.calcularTotalPagar();
let salidaDescuento = "Descuento: $" + carrito.aplicarDescuento();
let montoFinal = "Total: $" + Math.round(carrito.calcularTotalPagar() - carrito.aplicarDescuento());
alert(productosCarrito + "\n" + salidaSubTotal + "\n" + salidaDescuento + "\n" + montoFinal);

// let opcion = prompt("Elige una opcion de auto para rentar: \n1-Auto Gama Baja \n2-Auto Gama Media \n3-Auto Gama Alta \nPresiona X para salir")

// while(opcion != "X" && opcion != "x"){
//     switch(opcion){
//         case "1": let dias = parseInt(prompt("Cuantos días desea rentar el auto? \nValor por día: $20.000"))
//             if(dias > 30){
//                 alert("Disculpe. No se puede rentar un auto por más de 30 días.")
//             } else{
//                 alert("Alquilar un auto de Gama Baja por " + dias + " días va a costar: $" + costo(dias, opcion));
//             }
//             break
//         case "2": let dias2 = prompt("Cuantos días desea rentar el auto? \nValor por día: $30.000")
//             if(dias2 > 30){
//                 alert("Disculpe. No se puede rentar un auto por más de 30 días.")
//             } else{
//                 alert("Alquilar un auto de Gama Media por " + dias2+" días va a costar: $" + costo(dias2,opcion));
//             }   
//             break
//         case "3": let dias3 = prompt("Cuantos días desea rentar el auto? \nValor por día: $40.000")
//             if(dias3 > 30){
//                 alert("Disculpe. No se puede rentar un auto por más de 30 días.")
//             } else{
//                 alert("Alquilar un auto de Gama Alta por " + dias3 + " días va a costar: $" + costo(dias3,opcion));
//             }
//             break
//     }
//     opcion = prompt(
//         "Elige una opcion de auto para rentar: \n1-Auto Gama Baja \n2-Auto Gama Media \n3-Auto Gama Alta \nPresiona X para salir"
//     );
// }

// alert("Muchas gracias "+nombreYapellido+" por visitar nuestra pagina")

// function costo(dia,modelo){
//     if(modelo==1){
//         return dia*20000; 
//     }else{
//         if(modelo==2){
//             return dia*30000;
//         }else{
//             return dia*40000;
//         }
//     }
// }