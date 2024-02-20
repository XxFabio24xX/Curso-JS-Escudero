function renderProductos() {
    const productos = obtenerProductosLS();
    let contenido = "";

    for (const producto of productos) {
        contenido += 
        `<div class="card m-3 p-2 col-md-3">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top">
            <div class="card-body">
                <h3 class="card-title">${producto.nombre} ${producto.escala}</h3>
                <a href="./pages/producto.html" onclick="verProducto(${producto.id});" class="btn btn-secondary">Ver Producto</a>
            </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = contenido;
}

renderProductos();