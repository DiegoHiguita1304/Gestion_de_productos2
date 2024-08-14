document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const formRegister = document.getElementById('formRegister');
    const formLogin = document.getElementById('formLogin');
    const createUserButton = document.getElementById('createUser');
    const loginUserButton = document.getElementById('loginUser');
    const showFormLogin = document.getElementById('showFormLogin');
    const showFormRegister = document.getElementById('showFormRegister');
    const authContainer = document.getElementById('authContainer');
    
    // Cambiar al formulario de inicio de sesión cuando se haga clic en "Iniciar Sesión"
    if (showFormLogin) {
        showFormLogin.addEventListener('click', function() {
            formRegister.style.display = 'none'; // Ocultar el formulario de registro
            formLogin.style.display = 'block'; // Mostrar el formulario de inicio de sesión
        });
    }

    // Cambiar al formulario de registro cuando se haga clic en "Registrarse"
    if (showFormRegister) {
        showFormRegister.addEventListener('click', function() {
            formLogin.style.display = 'none'; // Ocultar el formulario de inicio de sesión
            formRegister.style.display = 'block'; // Mostrar el formulario de registro
        });
    }