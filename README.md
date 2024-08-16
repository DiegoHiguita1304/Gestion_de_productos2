## Aplicación web de gestión de productos

* Este proyecto es una aplicación web creada utilizando la arquitectura Model-View-Controller (MVC). La aplicación permite a los usuarios registrarse, iniciar sesión, ver, filtrar y mostrar detalles de varios productos. La aplicación está construida con HTML, CSS y JavaScript, y los datos se almacenan en un archivo JSON.

## Características:

* Registro e inicio de sesión de usuario: los usuarios pueden registrar una cuenta, iniciar sesión y el sistema autenticará sus credenciales.

* Listado de productos: los productos se enumeran con sus detalles, incluido el nombre, la descripción, el precio, la categoría y una imagen.

* Filtrado de productos: los usuarios pueden filtrar productos por nombre, categoría y rango de precios.

* Detalles del producto: al hacer clic en un producto se mostrará su información detallada en una nueva página.

* Diseño responsivo: la aplicación está diseñada para responder y funcionar bien en varios dispositivos.
Estructura del proyecto

* El proyecto está estructurado según el patrón MVC (Modelo-Vista-Controlador):

src/
│
├── controllers/
│ ├── dashboardController.js
│ ├── productDetailsController.js
│ ├── userController.js
│
├── data/
│ └── data.json
│
├── models/
│ ├── productDetails.js
│ ├── productModel.js
│ └── userModel.js
│
├── view/
│ ├── dashboard.html
│ ├── index.html
│ ├── productDetails.html
│ └── style.css
│
└── README.md

## Controllers: 
* Contiene los controladores que manejan la lógica de negocio y la interacción entre la vista y el modelo.

**Dashboard.js /**:
* Maneja la lógica principal para mostrar y filtrar productos en la página del panel de control. Carga productos del modelo, aplica filtros y muestra los resultados tanto en la interfaz de usuario como en la consola.

**productDetails.js/**: 
* Gestiona la lógica para mostrar los detalles de un producto seleccionado. Carga información del producto desde el modelo y actualiza la vista de detalles del producto.

**userController.js/**: 
* Gestiona la autenticación del usuario, incluido el registro y el inicio de sesión. Valida la entrada del usuario y almacena/recupera datos del usuario.

## Models/**:
* Contiene los modelos que representan los datos y las operaciones sobre ellos.

**productModel.js/**: 
* Modelo que maneja la carga y filtrado de productos.

**userModel.js/**: 
* Modelo que maneja la carga, guardado, y búsqueda de usuarios.

**productDetails.js/**:  
* Modelo que maneja la visualización de los detalles del producto


## Vistas

# Dashboard.html: 
* La página principal del panel donde se enumeran y filtran los productos.

# index.html: 
* La página de inicio para el inicio de sesión y el registro de usuarios.

# productDetails.html: 
* La página que muestra información detallada sobre un producto seleccionado.

# style.css: 
* Contiene los estilos de la aplicación, incluido el diseño para diferentes vistas.

## Datos:

**data.json/**: 
* Almacena la información del producto utilizada en la aplicación. Cada producto tiene un ID, nombre, descripción, precio, categoría y una URL de imagen.

## Requisitos previos

 * Necesita un navegador web para ejecutar este proyecto localmente.

## Instalación

* Clona el repositorio en tu máquina local:
** git clone https://github.com/DiegoHiguita1304/Gestion_de_productos2.git

* Navegue al directorio del proyecto:
** cd tu-Gestion_de_productos2

* Abra index.html en su navegador web para iniciar la aplicación.

## Uso

# Registrarse:
* Cree una nueva cuenta de usuario completando el formulario de registro.

# Iniciar sesión: 
* Inicie sesión con su correo electrónico y contraseña registrados.

# Ver productos: 
* Explore la lista de productos, aplique filtros y haga clic en cualquier producto para ver sus detalles.

# Cerrar sesión: 
* Haga clic en el botón Cerrar sesión para salir de su sesión.

## Tecnologías utilizadas

* HTML: Para la estructura de las páginas web.
* CSS: para diseñar la aplicación.
* JavaScript: Para la lógica de la aplicación y la interacción con la interfaz de usuario.
* JSON: Para almacenar y recuperar datos de productos.

# Licencia
* Este proyecto tiene la licencia MIT; consulte el archivo de LICENCIA para obtener más detalles.


[Diego-Higuita] Encargado de desarrollar esta aplicación.
