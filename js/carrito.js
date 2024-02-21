function renderCarrito() {
    const carrito = obtenerCarritoLS();
    let contenido = "";

    if (cantTotalProductos() > 0) {
        contenido = `<table>
        <tbody>
        <tr>
        <td colspan='4' class="text-end"><button class="btn btn-sm eliminar" onclick="eliminarCarrito()" title="Eliminar Carrito">Eliminar Carrito [X]</button></td>
        </tr>`;

        for (const producto of carrito) {
            contenido += `<tr>
            <td class="text-start"><img src="${producto.imagen}" alt="${producto.nombre}" width="200" /></td>
            <td class="text-start">${producto.nombre}</td>
            <td class="text-start"><b>$${producto.precio}</b></td>
            <td class="text-end"><button class="btn btn-sm eliminar" onclick="eliminarProductoCarrito(${producto.id})" title="Eliminar Producto"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbJJREFUSEuNVdthAzEIE5s0m1xG6SQdpaMko9wmbmywLQy+a36S+AFCSFhAHwFQLhd4E9idb+u2Wb/8yXArCXoTWVAGUE2QoLYYByC/QPkK53ThBPAN4D2BcnaBzHJS6K/P5SO/PAo/AXk0comWTrWrgLkzxO2cANI5XSpJ48wz0nLah9OPamaAvDfFUEegFJVBORHpRhI5oWI5OhJqD+auIdoHvam4ARIU6TEjRRrBcbuAyATlZU8nrhM0MClJq7aLab/qweEjo2k0g7Kqw/5XRtvPZb+KrJlrSaDpMs8Xi9H2a1RNzAmGqFvC2fesgsBq7VG3QOzJXQXbUUGu1pKtBzFgGDVbUZBMHVN0oWUpJjvtwYTYRfIfFTmeXILaAjOdWOyLJsfhnIxrVoX1QHs3EA9D6fr0Fac2iftppI2IKuolaEO6Oyjh0KObMG5IEUkO0c7JJMjtVHVGI2BrBf4p5XZZxdNoC+PeFsMxLwEOlob7bWyQ82tz3kXwdAJuOl8Gk3FzfKT5U/prlo03tyYnUMbT6UCHCuwimW4ZXvNBD6M7zJ3+Jt8g3NC4uTWnUqXrD+Ah3iFxXZk7AAAAAElFTkSuQmCC"" alt="Eliminar Producto" width="16" /></button></td>
            </tr>`;
        }

        contenido += `<tr>
        <td class="text-center" colspan='2'>Total a Pagar</td>
        <td><b>$${sumaTotalProductos()}</b></td>
        <td class="text-end"><button class="btn btn-compra btn-sm" onclick="finalizarCompra()" title="Finalizar Compra"><b>Finalizar Compra</b></button></td>
        </tr>
        </tbody>
        </table>`;
    } else {
        contenido = `<h1 class="my-5 p-5 text-center">No se encontraron Productos en el Carrito!</h1>`;
    }

    document.getElementById("productos").innerHTML = contenido;
}

renderCarrito();
renderBotonCarrito();