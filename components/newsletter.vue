<template>
    <div>
        <p class="boldspace">NEWSLETTER</p>
        <br>
        <p>Sign up for updates on Earnest Project events, research, and collaboration opportunities.</p>
        <br>
        <div class="email-box">
            <input type="email" id="emailInput" placeholder="Your email..." autocomplete="off">
            <button @click="submitEmail()">join</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        submitEmail() {
            var email = document.getElementById('emailInput').value;
            // Here you can add your logic to handle the email submission, e.g., sending to a backend or displaying a message
            console.log('Email submitted:', email);
            emailInput.value = '';
            emailInput.placeholder = 'Your email...';
        }
    }
}
</script>