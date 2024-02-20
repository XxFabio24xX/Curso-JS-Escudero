function renderProducto() {
    const producto = obtenerProductoLS();
    let contenido = `
    <div class="col-md-6 text-center texto-producto">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
    </div>
    <div class="col-md-6 text-center texto-producto">
        <p>${producto.nombre}</p>
        <p>Escala ${producto.escala}</p>
        <p class="texto-descripcion">${producto.descripcion}</p>
        <p>$${producto.precio}</p> 
    </div>`;

    document.getElementById("producto").innerHTML = contenido;
}

renderProducto();