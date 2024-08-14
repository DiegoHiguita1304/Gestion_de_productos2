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

    // Manejar el registro de usuario
    if (createUserButton) {
        createUserButton.addEventListener('click', function() {
            // Obtener valores de los campos de registro
            const name = document.getElementById('r-name').value.trim();
            const email = document.getElementById('r-email').value.trim();
            const password = document.getElementById('r-password').value.trim();
            const phone = document.getElementById('r-phone').value.trim();
            const rol = document.getElementById('r-rol').value.trim();

            // Validar que todos los campos estén completos
            if (!name || !email || !password || !phone || !rol) {
                alert("Todos los campos son obligatorios.");
                return;
            }

            // Validar formato del email
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                alert("Por favor, ingrese un email válido.");
                return;
            }

            // Validar longitud de la contraseña
            if (password.length < 8) {
                alert("La contraseña debe tener al menos 8 caracteres.");
                return;
            }

            // Validar formato del número de teléfono
            const phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phone)) {
                alert("Por favor, ingrese un número de teléfono válido (solo dígitos, entre 10 y 15 caracteres).");
                return;
            }

            // Crear un nuevo objeto de usuario
            const newUser = {
                name: name,
                email: email,
                password: password,
                phone: phone,
                rol : rol
            };

            // Obtener usuarios almacenados en localStorage o inicializar una lista vacía
            let users = JSON.parse(localStorage.getItem('users')) || [];
            // Verificar si el email ya está registrado
            const userExists = users.some(user => user.email === email);
            if (userExists) {
                alert("Este email ya está registrado. Por favor, use otro.");
                return;
            }

            // Agregar el nuevo usuario a la lista y guardarla en localStorage
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            alert("Usuario registrado con éxito.");
            formRegister.reset(); // Limpiar el formulario de registro
        });
    }

    // Manejar el inicio de sesión del usuario
    if (loginUserButton) {
        loginUserButton.addEventListener('click', function() {
            // Obtener valores de los campos de inicio de sesión
            const email = document.getElementById('l-email').value.trim();
            const password = document.getElementById('l-password').value.trim();
            const rol = document.getElementById('l-rol').value.trim();

            // Validar que ambos campos estén completos
            if (!email || !password || !rol) {
                alert("Todos los campos son obligatorios.");
                return;
            }

            // Obtener usuarios almacenados en localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];
            // Buscar el usuario que coincida con el email y contraseña proporcionados
            const user = users.find(user => user.email === email && user.password === password && user.rol === rol);
            if (!user) {
                alert("Email o contraseña incorrectos.");
                return;
            }

            // Guardar el usuario logueado en localStorage y redirigir al panel de control
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'dashboard.html'; // Redirigir al panel de control
        });
    }
});
