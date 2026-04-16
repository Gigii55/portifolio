document.addEventListener('DOMContentLoaded', () => {
    const btnIdioma = document.getElementById('btn-idioma');
    const menuIdiomas = document.getElementById('menu-idiomas');

    if (btnIdioma && menuIdiomas) {
        
        btnIdioma.addEventListener('click', (event) => {
            event.preventDefault(); 
            menuIdiomas.classList.toggle('mostrar');
            event.stopPropagation();
        });

        
        window.addEventListener('click', () => {
            if (menuIdiomas.classList.contains('mostrar')) {
                menuIdiomas.classList.remove('mostrar');
            }
        });
    }
});