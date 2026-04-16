(function() {
    emailjs.init("oi1AonFm53-httZYh"); 
})();

document.addEventListener('DOMContentLoaded', () => { //espera minha pagina carregar

    const form = document.querySelector('.formulario-contato'); // pega o meu form no HTML

    if (form) {

        form.addEventListener('submit', function(event) { //quando enviado....

            event.preventDefault(); 

            const btn = document.querySelector('.btn-enviar');

            btn.innerText = "ENVIANDO...";

            const serviceID = 'service_q2q40bx'; //servico da API (configurado no site)
            const templateID = 'template_8xuixg6'; 

            emailjs.sendForm(serviceID, templateID, this) //this referencia meu proprio form
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