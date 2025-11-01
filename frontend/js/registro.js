document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registroForm');
    const errorMsg = document.getElementById('error');
    const exitoMsg = document.getElementById('exito');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;

        const resultado = await registrarUsuario(username, password, email);

        if (resultado.success) {
            exitoMsg.textContent = resultado.message;
            errorMsg.textContent = '';
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        } else {
            errorMsg.textContent = resultado.message;
            exitoMsg.textContent = '';
        }
    });
});
