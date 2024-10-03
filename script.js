const text = ["I'm a Programmer", "I'm a Developer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, index++);

    document.querySelector('.typing-text').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 450);
    }
    else setTimeout(type, 100);
})();




(function() {
    emailjs.init({
        publicKey: "9eeJGuW4pQbxRC_tK",
    });
})();

const serviceID = 'service_yjug37e';
const templateID = 'template_hehzs8n';

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send(serviceID, templateID, {
        name: name,
        email: email,
        message: message,
    })
    .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Message sent successfully!');
    })
    .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send the message. Please try again later.');
    });
});