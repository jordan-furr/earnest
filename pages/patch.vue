<template>
    <div class="page-container">
        <div class="flex flex-row space-between mobile-col">
            <div class="mb6 w-20 text-div">
                <div class="w-90">
                    <p class="boldspace">"STAY EARNEST" PATCHES</p>
                    <br>
                    <p>Designed by French Artist, Laurène Piju, we've created iron-on patches out of our 'stay earnest'
                        motto.</p>
                    <br>
                    <p>We believe in the power of inspiring each other into earnestness and championing earnest efforts and
                        messages. If you would like a patch, please reach out and we will mail you one free of charge.</p>
                </div>
            </div>
            <div class="w-60 text-center mt6 ph3 big-patch">
                <img class="w-50 fade-in" src="/img/Earnest Project Patch.png" alt="">
            </div>
            <div class="w-20 text-right hide-mobile">
                <div class="mb6">
                    <p class="boldspace">CONTACT</p>
                    <br>
                    <span v-if="copiedLeft" class="copiedLeft">copied!</span>
                    <span @click="copyEmail" style="color: white;" class="contactemail">info@upschool.org</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            copiedLeft: false
        };
    },
    methods: {
        copyEmail() {
            const email = 'info@upschool.org';
            navigator.clipboard.writeText(email)
                .then(() => {
                    this.copiedLeft = true;
                    setTimeout(() => {
                        this.copiedLeft = false;
                    }, 1500);
                })
                .catch(error => {
                    console.error('Failed to copy:', error);
                });
        }
    }
};
</script>