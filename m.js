function addToCart(nombreProducto,precio){
    let cart= JSON.parse(localStorage.getItem(cart))||[];


let productoExiste=cart.find(item=> item.nombreProducto===nombreProducto)
    if(productoExiste){
        
        productoExiste.quantity+=1;
        
    }else{
        cart.push({nombreProducto,precio,quantity: 1})

    }
    
    localStorage.setItem(cart,JSON.stringify(cart))
    alert(`${nombreProducto} se añadió al carrito`)
}

if(window.location.pathname.includes(cart.html)){
    const cart=JSON.parse(localStorage.getItem(cart)) ||
    []
    const cartContainer=document.getElementById(cart);
    const totalContainer=document.getElementById(total);

    if(cart.length()===0){
        cartContainer.innerHTML= <p> El carrito esta vacio</p>
    }else{
        let total=0;
        cart.forEach(producto => {
            const productoContainer= document.createElement("div");
            productoContainer.className=cart-producto

            const productoText=document.createElement(span)
            productoText.textContent=`${nombreProducto} 
            (X${producto.quantity}) - $${producto.precio*
            producto.quantity}`;
            
            const removeButton=document.createElement(button);
            removeButton.textContent=Eliminar


            productoContainer.appendChild(productoText);
            productoContainer.appendChild(removeButton);
            cartContainer.appendChild(productoContainer);

            total+=(producto.precio*producto.quantity);
        });

        totalContainer.textContent=total;


    }
}