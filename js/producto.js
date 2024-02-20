function renderProducto() {
    const producto = obtenerProductoLS();
    let contenido = `
    <div class="row text-center p-4">
        <h1>${producto.nombre}</h1>
    </div>
    <div class="col-md-6 text-center texto-producto">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
    </div>
    <div class="col-md-6 texto-producto">
        <p>Año: ${producto.anio}</p>
        <p>Marca: ${producto.marca}</p>
        <p>Modelo: ${producto.modelo}</p>
        <p>Color: ${producto.color}</p>
        <p>Escala ${producto.escala}</p>
        <p class="texto-descripcion">${producto.descripcion}</p>
        <p>$${producto.precio}</p> 
    </div>`;

    document.getElementById("producto").innerHTML = contenido;
}

renderProducto();