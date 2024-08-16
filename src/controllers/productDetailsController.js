import { loadProducts } from '../Models/productModel.js';

export function showProductDetails(productId) {
    loadProducts().then(products => {
        console.log('Productos cargados:', products); // Verifica los productos cargados
        const product = products.find(p => p.id.toString() === productId.toString());

        if (product) {
            // Renderiza los detalles del producto
            const productNameElement = document.getElementById('productName');
            const productDescriptionElement = document.getElementById('productDescription');

            if (productNameElement && productDescriptionElement) {
                productNameElement.textContent = product.name;
                productDescriptionElement.textContent = product.description;
            } else {
                console.error('Elementos para mostrar detalles del producto no encontrados en el DOM');
            }
        } else {
            console.error('Producto no encontrado');
        }
    }).catch(error => {
        console.error('Error al cargar productos:', error);
    });
}