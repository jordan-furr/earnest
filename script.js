function submitEmail() {
    var email = document.getElementById('emailInput').value;
    // Here you can add your logic to handle the email submission, e.g., sending to a backend or displaying a message
    console.log('Email submitted:', email);
    emailInput.value = '';
    emailInput.placeholder = 'Enter your email...';
}