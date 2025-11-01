document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const errorMsg = document.getElementById('error');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const resultado = await loginUsuario(username, password);

        if (resultado.success) {
            window.location.href = 'index.html';
        } else {
            errorMsg.textContent = resultado.message;
        }
    });
});
