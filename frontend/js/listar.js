document.addEventListener('DOMContentLoaded', async () => {
    const lista = document.getElementById('listaProductos');
    const productos = await obtenerProductos();

    if (productos.length === 0) {
        lista.innerHTML = '<li>No hay productos disponibles.</li>';
        return;
    }

    productos.forEach(p => {
        const item = document.createElement('li');
        item.innerHTML = `
            <strong>${p.nombre}</strong> - $${p.precio}
            <p>${p.descripcion}</p>
            <a href="editar.html?id=${p.id}">Editar</a>
            <button data-id="${p.id}" class="eliminarBtn">Eliminar</button>
        `;
        lista.appendChild(item);
    });

    // Delegar eventos de eliminación
    lista.addEventListener('click', async (e) => {
        if (e.target.classList.contains('eliminarBtn')) {
            const id = e.target.getAttribute('data-id');
            const confirmado = confirm('¿Estás seguro de que deseas eliminar este producto?');
            if (confirmado) {
                const resultado = await eliminarProducto(id);
                if (resultado.success) {
                    e.target.parentElement.remove();
                } else {
                    alert(resultado.message);
                }
            }
        }
    });
});
