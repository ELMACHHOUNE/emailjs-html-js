document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const serviceID = 'service_apskyxg'; // Your Service ID from EmailJS
    const templateID = 'template_dyrrg8w'; // Your Template ID from EmailJS

    // Log the form data to the console for debugging
    console.log("Form Data:", this); 

    // Send the email using EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            console.log('SUCCESS!');
            alert("Message sent successfully!");
            document.getElementById('myForm').reset(); // Reset the form after success
        }, function(error) {
            console.log('FAILED...', error);
            alert("Error sending message. Please try again.");
        });
});
