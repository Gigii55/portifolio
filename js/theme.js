document.addEventListener('DOMContentLoaded', () => {
    const btnTema = document.getElementById('alterar-tema');
    const body = document.body;

  
    function atualizarIcone(isLight) {
        if (isLight) {
            btnTema.src = 'images/icon-lua.svg'; 
            btnTema.alt = 'Modo Escuro';
        } else {
            btnTema.src = 'images/icon-sol.svg';
            btnTema.alt = 'Modo Claro';
        }
    }

    
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'light') {
        body.classList.add('light-mode');
        atualizarIcone(true);
    }

   
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            const isLight = body.classList.toggle('light-mode');
            
           
            localStorage.setItem('tema', isLight ? 'light' : 'dark');
            
    
            atualizarIcone(isLight);
        });
    }
});