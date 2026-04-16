(function() {
    emailjs.init("oi1AonFm53-httZYh"); 
})();

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formulario-contato');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const btn = document.querySelector('.btn-enviar');
            btn.innerText = "ENVIANDO...";

            const serviceID = 'service_q2q40bx';
            const templateID = 'template_8xuixg6'; 

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.innerText = "MENSAGEM ENVIADA!";
                    form.reset();
                    setTimeout(() => { btn.innerText = "ENVIAR MENSAGEM"; }, 3000);
                }, (err) => {
                    btn.innerText = "ERRO AO ENVIAR";
                    console.log("Erro:", err);
                });
        });
    }
});