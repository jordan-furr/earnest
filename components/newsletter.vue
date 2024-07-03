<script>
import { addDoc, collection } from "firebase/firestore";

export default {
    methods: {
        async submitEmail() {
            console.log('clicked')
            var email = document.getElementById('emailInput').value;
            // Here you can add your logic to handle the email submission, e.g., sending to a backend or displaying a message
            try {
                const docRef = await addDoc(collection(this.$db, "emails"), {
                    email: email
                });
            } catch (e) {
                console.error("Error adding email: ", e);
            }
            console.log('Email submitted:', email);
            emailInput.value = '';
            emailInput.placeholder = 'your email...';
        }
    }
};
</script>

<template>
    <div>
        <p>Join our community celebrating earnest living. You'll receive project updates, research findings, and exclusive stories.</p>
        <br>
        <div class="email-box fade-in">
            <input type="email" id="emailInput" placeholder="your email..." autocomplete="off">
            <button @click="submitEmail()">join</button>
        </div>
    </div>
</template>