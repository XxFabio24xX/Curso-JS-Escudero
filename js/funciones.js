//Array de Productos
const productos = [
    {id:1, nombre: "2020 Chevrolet Corvette C8 Stingray Gris ",anio: "2020", marca:"Chevrolet", modelo:"Corvette C8 Stingray", color:"Gris",  escala:"1:18", imagen:"https://cochesdemetal.es/72627-thickbox_default/2020-chevrolet-corvette-c8-stingray-gris-118-maisto-31447.jpg", precio: 20000, descripcion:"La dirección es practicable. Se abren las puertas. Se abre el capó delantero del maletero. Se abre el portó trasero del motor. Suspensión independiente en las cuatro ruedas. Incluye peana expositora."},
    {id:2, nombre: "2020 Ford Mustang Shelby GT500 Fast Track Grabber Lime", imagen:"https://cochesdemetal.es/108075-thickbox_default/2020-ford-mustang-shelby-gt500-fast-track-grabber-lime-118-solido-s1805902.jpg", precio: 44000, anio: "2020", marca: "Ford", modelo: "Mustang Shelby GT500 Fast Track", color: "Grabber Lime",escala:"1:18", descripcion: "La Sexta Generación Mustang ha seducido a conductores de todo el mundo desde 2015. La Fase 2 se comercializó a partir de 2018 y la versión deportiva llegó al año siguiente, todavía bajo el nombre gt500. Con su libery roja y rayas blancas es un homenaje a los primeros Mustangs. Tiene el mítico motor V8 que caracteriza a los Muscle Cars, con sus 5.162cc es capaz de desarrollar 771hp. El acabado 'Fast Track' incluye un chasis mas rígido, una importante reducción de peso, aditamentos aerodinámicos y unas llantas de fibra de carbono"},
    {id:3, nombre: "2020 Alfa Romeo Giulia GTAm Blanco", anio:"2020", marca:"Alfa Romeo", modelo:"Giulia GTAm", color:"Blanco", escala:"1:18", imagen:"https://cochesdemetal.es/139646-thickbox_default/2020-alfa-romeo-giulia-gtam-blanco-118-bburago-11049.jpg", precio: 39000, descripcion:"Preciosa reproducción fabricada en diecast (metal) a escala 1:18 por Bburago. La dirección gira con el volante. Se abren las puertas delanteras. Se abre el maletero trasero. Se abre el capó motor delantero. El modelo tiene una longitud aproximada de 25,5 cm."},
    {id:4, nombre: "2022 Lamborghini Countach LPI 800-4 Granate Metalizado", anio:"2022", marca:"Lamborghini", modelo:"Countach LPI 800-4", color:"Granate Metalizado", escala:"1:18", imagen:"https://cochesdemetal.es/139794-thickbox_default/2022-lamborghini-countach-lpi-800-4-granate-metalizado-118-maisto-31459.jpg", precio: 37000, descripcion:"Preciosa reproducción fabricada en diecast (metal) a escala 1:18 por Maisto. La dirección es practicable. Suspensión independiente en las cuatro ruedas. Apertura de las puertas estilo tijera. Se abre el portón trasero motor. Se abre el capó delantero maletero. Incluye  peana expositora con unas dimensiones aproximadas de 32,5 x 16,5 cm. El modelo tiene una longitud aproximada de 28 cm."},
    {id:5, nombre: "2022 Audi GT RS E-Tron Verde Oliva", anio:"2022", marca:"Audi", modelo:"GT RS E-Tron", color:"Verde Oliva", escala:"1:18", imagen:"https://cochesdemetal.es/167075-thickbox_default/2022-audi-gt-rs-e-tron-verde-oliva-118-bburago-11050.jpg", precio: 38000, descripcion:"Modelo fabricado en metal (Diecast) a escala 1:18 por Bburago. Se abren las puertas delanteras. Se abre el capó delantero. Se abre el maletero trasero. La dirección es practicable. El modelo tiene una longitud aproximada de 29 cm. La caja mide 29,5 cm. de ancho, 17,5 de largo y 12 cm de alto."},
    {id:6, nombre: "2021 Mercedes-Benz Clase-C (W206) Gris Magno", anio:"2021", marca:"Mercedes-Benz", modelo:"Clase C", color:"Gris Magno", escala:"1:18", imagen:"https://cochesdemetal.es/103332-thickbox_default/2021-mercedes-benz-clase-c-w206-gris-magno-118-dealer-edition-b66960638.jpg", precio: 50000, descripcion:"DEALER EDITION: Modelo fabricado en exclusiva para la venta en Boutiques Mercedes-Benz, no se vende en tiendas especializadas. Edición limitada a 498 unidades. Las ruedas delanteras son dirigibles. Se abren las puertas delanteras. Suspensión independiente en las cuatro ruedas. Todos los interiores están tapizados. Incluye un guante de algodón y una herramienta para la manipulación del modelo. Terminación HQ de Norev, con detalles y acabados tan buenos que parece una maqueta de AutoArt o Kyosho pero a precio de Norev. El modelo tiene unas dimensiones aproxiomadas de 26,2 cm. largo x 11,4 cm. de ancho x 8,1 cm. de alto"},
]

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const obtenerProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

const guardarCarritoLS = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const obtenerIdProductoLS = () => {
    return JSON.parse(localStorage.getItem("producto")) || 0;
}

const cantTotalProductos = () => {
    const carrito = obtenerCarritoLS();

    return carrito.length;
}

const sumaTotalProductos = () => {
    const carrito = obtenerCarritoLS();
    
    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0);
}

const eliminarCarrito = () => {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
}

const confirmacionEliminarCarrito = () => {
    Swal.fire({
        title: "Estas seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            eliminarCarrito();
          Swal.fire({
            title: "Eliminado!",
            text: "Su carrito ha sido eliminado.",
            icon: "success"
          });
          notificacion("Carrito Eliminado!");
        }
      });
}

const verProducto = (id) => {
    localStorage.setItem("producto", JSON.stringify(id));
}

const buscarProducto = () => {
    const productos = obtenerProductosLS();
    const id = obtenerIdProductoLS();
    const producto = productos.find(item => item.id === id);

    return producto;
}

const agregarProductoCarrito = () => {
    const producto = buscarProducto();
    const carrito = obtenerCarritoLS();
    carrito.push(producto);
    guardarCarritoLS(carrito);
    renderBotonCarrito();
    notificacion("Producto Agregado!");
}

const eliminarProductoCarrito = (id) => {
    const carrito = obtenerCarritoLS();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarritoLS(carritoActualizado);
    renderCarrito();
    renderBotonCarrito();
    notificacion("Producto Eliminado!");
}

const renderBotonCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantTotalProductos();
}

const finalizarCompra = () => {
    Swal.fire({
        title: "Gracias por tu Compra!",
        text: "El total a pagar es $" + sumaTotalProductos() + " pesos.",
        imageUrl: "https://cochesdemetal.es/img/coches-de-metal-logo-1523440260.jpg",
        imageWidth: 160,
        imageAlt: "Coches de Metal",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Volver a la tienda"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarCarrito();
                notificacion("Gracias por su compra!");
            }
        });
}

const notificacion = (texto) => {
    Swal.fire({
        position: "top-end",
        title: texto,
        showConfirmButton: false,
        timer: 1000
    });
}

guardarProductosLS(productos);