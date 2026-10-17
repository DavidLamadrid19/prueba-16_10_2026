function addToCart(nombreProducto, precio) {
    // obtener carrito del localStorage o crear uno vacío
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // verificar si el producto ya existe en el carrito
    let productoExiste = cart.find(item => item.nombreProducto === nombreProducto);

    if (productoExiste) {
        // si existe, aumentar la cantidad
        productoExiste.quantity += 1;
    } else {
        // si no existe, añadir producto con cantidad 1
        cart.push({ nombreProducto, precio, quantity: 1 });
    }

    // guardar en el localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // alerta con el nombre del producto
    alert(`${nombreProducto} se añadió al carrito`);
}

//cargar el carrito cart.html//
if (window.location.pathname.includes("cart.html")) {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart");
    const totalContainer = document.getElementById("Total");

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>EL carrito esta vacio</p>";
    } else {

        let total = 0;

        cart.forEach(producto => {

            //crear un contenedor div para cada producto
            const productoContainer = document.createElement("div");
            productoContainer.className = "cart-product";

            //crear el texto del producto(cantidad y subtotal)
            const productoText = document.createElement("span");
            productoText.textContent = `${producto.nombreProducto} 
            (X${producto.quantity}) - $${producto.precio * producto.quantity}`;

            //agregar el boton eliminar
            const removeButton = document.createElement("button");
            removeButton.textContent = "Eliminar";

            //añadir al carrito el texto y el boton eliminar al contenedor
            productoContainer.appendChild(productoText);
            productoContainer.appendChild(removeButton);
            cartContainer.appendChild(productoContainer);

            total += (producto.precio * producto.quantity);

        });

        totalContainer.textContent = total;
            // --- AÑADIR UN BOTÓN PARA VACIAR EL CARRITO ---
    if (cart.length > 0) {
        const clearButton = document.createElement('button');
        clearButton.textContent = 'Vaciar Carrito';
        clearButton.onclick = clearCart;
        clearButton.style.marginTop = '20px'; // Un poco de espacio
        cartContainer.appendChild(clearButton);
    }
}
}
    
