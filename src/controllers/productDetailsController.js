import { loadProducts } from '../Models/productModel.js';

export function showProductDetails(productId) {
    loadProducts().then(products => {
        const product = products.find(p => p.id.toString() === productId.toString());

        if (product) {
            // Imprime solo la información del producto seleccionado en la consola
            console.log('------------------------');
            console.log(`Nombre: ${product.name}`);
            console.log(`Descripción: ${product.description}`);
            console.log(`Precio: ${product.price}`);
            console.log(`Categoría: ${product.category}`);
            console.log('------------------------');
            
            // Renderiza los detalles del producto en el DOM
            const productNameElement = document.getElementById('productName');
            const productDescriptionElement = document.getElementById('productDescription');
            const productPriceElement = document.getElementById('productPrice');
            const productCategoryElement = document.getElementById('productCategory');

            if (productNameElement && productDescriptionElement && productPriceElement && productCategoryElement) {
                productNameElement.textContent = product.name;
                productDescriptionElement.textContent = product.description;
                productPriceElement.textContent = product.price;
                productCategoryElement.textContent = product.category;
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
