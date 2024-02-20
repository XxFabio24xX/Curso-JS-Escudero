//Array de Productos
const productos = [
    {id:1, nombre: "2020 Chevrolet Corvette C8 Stingray Gris ", escala:"1:18", imagen:"https://cochesdemetal.es/72627-thickbox_default/2020-chevrolet-corvette-c8-stingray-gris-118-maisto-31447.jpg", precio: 20000},
    {id:2, nombre: "2020 Ford Mustang Shelby GT500 Fast Track Grabber Lime", imagen:"https://cochesdemetal.es/108075-thickbox_default/2020-ford-mustang-shelby-gt500-fast-track-grabber-lime-118-solido-s1805902.jpg", precio: 44000, descripcion: "La Sexta Generación Mustang ha seducido a conductores de todo el mundo desde 2015. La Fase 2 se comercializó a partir de 2018 y la versión deportiva llegó al año siguiente, todavía bajo el nombre gt500. Con su libery roja y rayas blancas es un homenaje a los primeros Mustangs. Tiene el mítico motor V8 que caracteriza a los Muscle Cars, con sus 5.162cc es capaz de desarrollar 771hp. El acabado 'Fast Track' incluye un chasis mas rígido, una importante reducción de peso, aditamentos aerodinámicos y unas llantas de fibra de carbono", anio: "2020", marca: "Ford", modelo: "Mustang Shelby GT500 Fast Track", color: "Grabber Lime",escala:"1:18"},
    {id:3, nombre: "2020 Alfa Romeo Giulia GTAm Blanco", escala:"1:18", imagen:"https://cochesdemetal.es/139646-thickbox_default/2020-alfa-romeo-giulia-gtam-blanco-118-bburago-11049.jpg", precio: 39000},
    {id:4, nombre: "2022 Lamborghini Countach LPI 800-4 Granate Metalizado", escala:"1:18", imagen:"https://cochesdemetal.es/139794-thickbox_default/2022-lamborghini-countach-lpi-800-4-granate-metalizado-118-maisto-31459.jpg", precio: 37000},
    {id:5, nombre: "2022 Audi GT RS E-Tron Verde Oliva", escala:"1:18", imagen:"https://cochesdemetal.es/167075-thickbox_default/2022-audi-gt-rs-e-tron-verde-oliva-118-bburago-11050.jpg", precio: 38000},
    {id:6, nombre: "2021 Mercedes-Benz Clase-C (W206) Gris Magno", escala:"1:18", imagen:"https://cochesdemetal.es/103332-thickbox_default/2021-mercedes-benz-clase-c-w206-gris-magno-118-dealer-edition-b66960638.jpg", precio: 50000},
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

const renderTotalCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantTotalProductos();
}

const verProducto = (id) => {
    localStorage.setItem("producto", JSON.stringify(id));
}

const obtenerProductoLS = () => {
    const productos = obtenerProductosLS();
    const id = obtenerIdProductoLS();
    const producto = productos.find(item => item.id === id);
    
    return producto;
}

guardarProductosLS(productos);