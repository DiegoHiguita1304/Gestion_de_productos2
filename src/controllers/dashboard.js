import { loadProducts, filterProducts as filterProductsFromModel } from '../Models/productModel.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM completamente cargado y analizado');

    // Obtiene referencias a los elementos del DOM
    const logoutButton = document.getElementById('logout');
    const productList = document.getElementById('productList');
    const applyFiltersButton = document.getElementById('applyFiltersButton');
    const filterNameInput = document.getElementById('filterNameInput');
    const filterCategoryInput = document.getElementById('filterCategoryInput');
    const minPriceInput = document.getElementById('minPriceInput');
    const maxPriceInput = document.getElementById('maxPriceInput');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!filterCategoryInput) {
        console.error('Elemento filterCategoryInput no encontrado en el DOM');
        return;
    }

    if (loggedInUser) {
        const dashboard = document.querySelector('.dashboard');
        const userInfo = document.createElement('div');
        userInfo.innerHTML = `<p>Nombre: ${loggedInUser.name}</p><p>Rol: ${loggedInUser.rol}</p>`;
        dashboard.insertBefore(userInfo, dashboard.firstChild);
    } else {
        window.location.href = '/index.html';
    }

    loadProducts()
        .then(products => {
            const uniqueCategories = [...new Set(products.map(p => p.category))];
            uniqueCategories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                filterCategoryInput.appendChild(option);
            });

            function formatNumber(number) {
                return number.toLocaleString('es-CO');
            }

            function renderProducts(productsToRender) {
                productList.innerHTML = productsToRender.map(product => `
                    <div class="product">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                        <p>Precio: ${formatNumber(product.price)}</p>
                        <p>Categoría: ${product.category}</p>
                    </div>
                `).join('');

                console.clear();
                console.log("Productos filtrados:");
                productsToRender.forEach(product => {
                    console.log(`Nombre: ${product.name}`);
                    console.log(`Descripción: ${product.description}`);
                    console.log(`Precio: ${product.price}`);
                    console.log(`Categoría: ${product.category}`);
                    console.log('------------------------');
                });
            }

            function filterProducts() {
                const filters = {
                    name: filterNameInput.value.trim().toLowerCase(),
                    category: filterCategoryInput.value.trim().toLowerCase(),
                    minPrice: parseFloat(minPriceInput.value),
                    maxPrice: parseFloat(maxPriceInput.value)
                };

                const filteredProducts = filterProductsFromModel(products, filters);
                renderProducts(filteredProducts);
            }

            filterNameInput.addEventListener('input', filterProducts);
            filterCategoryInput.addEventListener('change', filterProducts);
            applyFiltersButton.addEventListener('click', filterProducts);

            renderProducts(products);
        })
        .catch(error => {
            console.error('Error al cargar productos:', error);
        });

    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            localStorage.removeItem('loggedInUser');
            window.location.href = 'index.html';
        });
    }
});
