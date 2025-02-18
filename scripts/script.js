//DESCARGAR CV
function descargarCV() {
    const link = document.createElement('a');
    link.href = '/assets/CV - Augusto Ficara.pdf';
    link.download = 'CV - Augusto Ficara.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//ENVIAR FORMULARIO CONTACTO
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
    var from_name = document.getElementById('from_name').value.trim();
    var email_id = document.getElementById('email_id').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    if (!from_name || !email_id || !subject || !message) {
        alert("Por favor, complete todos los campos.");
        event.preventDefault(); // Previene el envío del formulario
    } else {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'service_meq7hdo';
        const templateID = 'template_hkolaq8';

        emailjs.sendForm(serviceID, templateID, this).then(() => {
            btn.value = ' Enviar mensaje';
            alert('Mensaje enviado!');
            form.reset();
        }, (err) => {
            btn.value = ' Enviar mensaje';
            alert("Error al enviar el mensaje: " + JSON.stringify(err));
        });
    }


});