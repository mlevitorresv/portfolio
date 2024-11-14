import emailjs from 'emailjs-com';

// Inicializar EmailJS con tu User ID
emailjs.init('LZjVZN1doT6o4aHNm'); // Reemplaza 'TU_USER_ID' con tu user ID de EmailJS


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Captura los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aquí puedes implementar la lógica de envío (por ejemplo, con EmailJS o una API)
    // Ejemplo con EmailJS:
    
    emailjs.send('service_gt3yppm', 'template_pn3pwva', {
        name: name,
        email: email,
        message: message,
    }).then(function(response) {
        console.log('Correo enviado exitosamente!', response.status, response.text);
        document.querySelector('.message.success').style.display = 'block';
    }, function(error) {
        console.error('Error al enviar el mensaje:', error);
        document.querySelector('.message.danger').style.display = 'block';
    });
});
