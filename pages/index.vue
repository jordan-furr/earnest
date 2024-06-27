<template>
    <div class="ph5 pv6">
        <div class="w-100 h-90vh flex flex-row">
            <div class="w-20">
                <values-menu />
            </div>
            <div class="text-center w-60 mt6">
                <img class="w-100" src="/img/Earnest Venn Diagram.png" alt="">
            </div>
            <div class="w-20 text-right">
                <p>celebrating earnest</p>
                <p>an underrated word</p>
                <p>describing a gravity of traits</p>
                <p>pointing us in the right direction</p>
                <p>. . . .</p>
                <p>on the hunt and sharing facts</p>
                <br>
            </div>
        </div>
        <div class="w-30">
            <p>NEWSLETTER</p>
            <br>
            <p>Sign up for updates on Earnest Project events, research, and collaboration opportunities.</p>
            <br>
            <div class="email-box">
                <input type="email" id="emailInput" placeholder="Enter your email..."  autocomplete="off">
                <button onclick="submitEmail()">Submit</button>
            </div> 
        </div>
    </div>
</template>

<script>
function submitEmail() {
    var email = document.getElementById('emailInput').value;
    // Here you can add your logic to handle the email submission, e.g., sending to a backend or displaying a message
    console.log('Email submitted:', email);
    emailInput.value = '';
    emailInput.placeholder = 'Enter your email...';
}
</script>