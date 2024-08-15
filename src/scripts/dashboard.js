// // Espera a que el DOM se haya cargado completamente antes de ejecutar el script
// document.addEventListener('DOMContentLoaded', function () {
//     console.log('DOM completamente cargado y analizado');

//     // Obtiene referencias a los elementos del DOM
//     const logoutButton = document.getElementById('logout');
//     const productList = document.getElementById('productList');
//     const applyFiltersButton = document.getElementById('applyFiltersButton');
//     const filterNameInput = document.getElementById('filterNameInput');
//     const filterCategoryInput = document.getElementById('filterCategoryInput');
//     const minPriceInput = document.getElementById('minPriceInput');
//     const maxPriceInput = document.getElementById('maxPriceInput');
//     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

//     // Verifica que el elemento de selección de categoría esté en el DOM
//     if (!filterCategoryInput) {
//         console.error('Elemento filterCategoryInput no encontrado en el DOM');
//         return;
//     } else {
//         console.log('Elemento filterCategoryInput encontrado en el DOM');
//     }

//     if (loggedInUser) {
//         // Mostrar el nombre y rol en el panel de control
//         const dashboard = document.querySelector('.dashboard');
//         const userInfo = document.createElement('div');
//         userInfo.innerHTML = `<p>Nombre: ${loggedInUser.name}</p><p>Rol: ${loggedInUser.rol}</p>`;
//         dashboard.insertBefore(userInfo, dashboard.firstChild); // Inserta la información al principio del panel
//     } else {
//         // Si no hay un usuario registrado, redirigir al inicio de sesión
//         window.location.href = 'index.html';
//     }

//     // Cargar productos desde data.json
//     fetch('data.json')
//         .then(response => response.json())
//         .then(products => {

//             // Obtiene categorías únicas de los productos
//             const uniqueCategories = [...new Set(products.map(p => p.category))];

//             // Agrega las opciones de categorías al menú desplegable
//             uniqueCategories.forEach(category => {
//                 const option = document.createElement('option');
//                 option.value = category;
//                 option.textContent = category;
//                 filterCategoryInput.appendChild(option);
//             });

//             function formatNumber(number) {
//                 return number.toLocaleString('es-CO')
//             }

//             // Función para renderizar productos en la interfaz
//             function renderProducts(productsToRender) {
//                 productList.innerHTML = productsToRender.map(product => `
//                     <div class="product">
//                         <h2>${product.name}</h2>
//                         <p>${product.description}</p>
//                         <p>Precio: ${formatNumber(product.price)}</p>
//                         <p>Categoría: ${product.category}</p>
//                     </div>
//                 `).join('');

//                 // Limpia la consola y muestra los productos filtrados
//                 console.clear();
//                 console.log("Productos filtrados:");
//                 productsToRender.forEach(product => {
//                     console.log(`Nombre: ${product.name}`);
//                     console.log(`Descripción: ${product.description}`);
//                     console.log(`Precio: ${product.price}`);
//                     console.log(`Categoría: ${product.category}`);
//                     console.log('------------------------');
//                 });
//             }

//             // Función para filtrar productos según los criterios establecidos
//             function filterProducts() {
//                 let filteredProducts = products;
//                 const filterName = filterNameInput.value.trim().toLowerCase();
//                 const filterCategory = filterCategoryInput.value.trim().toLowerCase();
//                 const minPrice = parseFloat(minPriceInput.value);
//                 const maxPrice = parseFloat(maxPriceInput.value);

//                 // Filtra por nombre de producto
//                 if (filterName) {
//                     filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(filterName));
//                 }

//                 // Filtra por categoría
//                 if (filterCategory) {
//                     filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === filterCategory);
//                 }

//                 // Filtra por precio mínimo
//                 if (!isNaN(minPrice)) {
//                     filteredProducts = filteredProducts.filter(product => product.price >= minPrice);
//                 }

//                 // Filtra por precio máximo
//                 if (!isNaN(maxPrice)) {
//                     filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
//                 }

//                 // Renderiza los productos filtrados
//                 renderProducts(filteredProducts);
//             }

//             // Agrega eventos a los elementos de filtro
//             filterNameInput.addEventListener('input', filterProducts);
//             filterCategoryInput.addEventListener('change', filterProducts);
//             applyFiltersButton.addEventListener('click', filterProducts);

//             // Renderiza productos al cargar la página
//             renderProducts(products);
//         })
//         .catch(error => {
//             console.error('Error al cargar productos:', error);
//         });

//     // Agrega evento al botón de cerrar sesión
//     if (logoutButton) {
//         logoutButton.addEventListener('click', function () {
//             localStorage.removeItem('loggedInUser'); // Elimina el usuario registrado del almacenamiento local
//             window.location.href = 'index.html'; // Redirige al inicio de sesión
//         });
//     }
// });
