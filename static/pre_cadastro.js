document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const sideMenu = document.getElementById('sideMenu');
    const form = document.getElementById('preRegistroForm');

    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        sideMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        if (!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            sideMenu.classList.remove('active');
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Formulário enviado');
    });

    document.querySelector('.consultar-btn').addEventListener('click', function() {
        const cnpj = document.getElementById('cnpj').value;
        console.log('Consultando CNPJ:', cnpj);
    });
});