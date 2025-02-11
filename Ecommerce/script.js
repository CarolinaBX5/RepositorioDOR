document.getElementById('verCarrito').addEventListener('click', verModal);

document.getElementById('closeModal').addEventListener('click',verModal);

document.querySelector('.close').addEventListener('click',verModal);

document.getElementById('emptyCart').addEventListener('click', function (){
    let borrar=document.querySelector('.cart-items');
    borrar.innerHTML="";
    vaciarCarrito();
})

document.querySelectorAll('.add-to-cart').forEach(function(button) {
    button.addEventListener('click', function() {
        const producto = this.closest('.product-card'); // Use 'this' to refer to the clicked button
        const nombre = producto.querySelector('.product-title').textContent;
        const precio = parseFloat(producto.querySelector('.precio').textContent);

        const carrito = document.querySelector('.cart-items');
        let item = document.createElement('p');
        item.textContent = nombre + ", " + precio.toFixed(2)+"€"; // Ensure price is formatted to 2 decimal places
       item.addEventListener('click', function(){
        item.remove();
        totalCarrito(-precio);
       })
        carrito.appendChild(item);

        totalCarrito(precio); // Assuming this is defined elsewhere
        
    });
});







function verModal(){
    let modal=document.querySelector('.modal');
    if(modal.style.display==='none'){
        modal.style.display='block';
    }else{
        modal.style.display='none';
    }
}

function totalCarrito(precio){
    let totalElement=document.getElementById('total');
    totalElement.textContent=(parseFloat(totalElement.textContent) + precio).toFixed(2);
}

function vaciarCarrito(){
    document.getElementById('total').textContent='0.00';
}





