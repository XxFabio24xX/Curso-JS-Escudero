//ctrl + K + C para comentar lineas
//ctrl + K + U para descomentar lineas

//Creo Array de los autos disponibles
const autos = [
    {id:1, marca: "Toyota", modelo: "Yaris", anio: "2022", precio: 65000},
    {id:2, marca: "Renault", modelo: "Sendero", anio: "2023", precio: 47000 },
    {id:3, marca: "Nissan", modelo: "Versa", anio: "2023", precio: 71000 },
    {id:4, marca: "Toyota", modelo: "Hilux", anio: "2022", precio: 124000 },
    {id:5, marca: "Chevrolet", modelo: "Tracker", anio: "2022", precio: 112000 },
    {id:6, marca: "Chevrolet", modelo: "Cruze", anio: "2022", precio: 67000 },
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
    opcionSeleccionada = parseInt(prompt("Seleccione el auto que desee agregar al Carrito:\nEl valor equivale a la renta del vehiculo por 1 dia.\n" + listarProductos()+"0 - Para Finalizar el pedido"));

    if (opcionSeleccionada == 0) {
        break;
    }

    carrito.agregarAuto(opcionSeleccionada);
}

let productosCarrito = "Va a alquilar el/los siguiente/s autos por "+ carrito.calcularTotalAutos()+" dias:\n\n" + carrito.listarCarrito();
let salidaSubTotal = "Subtotal: $" + carrito.calcularTotalPagar();
let salidaDescuento = "Descuento: $" + carrito.aplicarDescuento();
let montoFinal = "Total: $" + Math.round(carrito.calcularTotalPagar() - carrito.aplicarDescuento());
alert(productosCarrito + "\n" + salidaSubTotal + "\n" + salidaDescuento + "\n" + montoFinal);

alert("Muchas gracias "+nombreYapellido+" por visitar nuestra pagina")