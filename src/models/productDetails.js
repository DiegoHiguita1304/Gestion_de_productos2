import { showProductDetails } from '../controllers/productDetailsController.js';

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    console.log('productId obtenido de la URL:', productId); // Verifica el valor del productId
    showProductDetails(productId);
});

    // Agrega evento al botón de volver a la lista
    document.getElementById('backToListButton').addEventListener('click', function () {
        window.location.href = './dashboard.html';
    });

