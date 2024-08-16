import { showProductDetails } from '../controllers/productDetailsController.js';

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');


    // Función para renderizar productos en la interfaz
    function renderProducts(productsToRender) {
        if (productsToRender) {
            productList.innerHTML = productsToRender.map(product => `
                <div class="product" data-id="${product.id}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Precio: ${formatNumber(product.price)}</p>
                    <p>Categoría: ${product.category}</p>
                </div>
            `).join('');
        } else {
            console.error('Element with id "productList" not found.');
        }
    }

    // Llama a la función para mostrar los detalles del producto
    showProductDetails(productId);

    // Agrega evento al botón de volver a la lista dentro de DOMContentLoaded
    const backToListButton = document.getElementById('backToListButton');
    if (backToListButton) {
        backToListButton.addEventListener('click', function () {
            console.log("Botón 'Volver a la lista' clicado"); // Verifica que el evento se dispara
            window.location.href = './dashboard.html';
        });
    }
});
