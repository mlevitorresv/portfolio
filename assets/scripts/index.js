import emailjs from 'emailjs-com';

// Inicializar EmailJS con tu User ID
emailjs.init('TU_USER_ID'); // Reemplaza 'TU_USER_ID' con tu user ID de EmailJS

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_gt3yppm', 'template_pn3pwva', this)
        .then((response) => {
            console.log('Correo enviado exitosamente!', response.status, response.text);
            alert("¡Mensaje enviado con éxito!");
        }, (error) => {
            console.error('Error al enviar el mensaje:', error);
            alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
        });
});
