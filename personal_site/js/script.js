document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        document.getElementById('formResponse').textContent = Thank you, ${name}. Your message has been sent!;
        document.getElementById('formResponse').style.color = 'green';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formResponse').textContent = 'Please fill out all fields.';
        document.getElementById('formResponse').style.color = 'red';
    }
});