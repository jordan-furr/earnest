<template>
    <div class="footer">
        <div class="flex flex-row mb6 col-reverse w-85 text-div space-between">
            <div class="w-25 text-div">
                <div class="w-80">
                    <p class="boldspace">EARNEST PROJECT</p>
                    <br>
                    <p class="mb1">Stay Earnest.</p>
                    <span @click="copyEmail" style="color: white;" class="contactemail">info@upschool.org</span>
                    <span v-if="copied" class="copied">copied!</span>
                    <br>
                    <br>
                    <div class="w-20">
                        <a target="_blank" href="https://www.instagram.com/theearnestproject/"><img
                                class="w-45 bluecursor ig" src="/img/ig.webp" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="w-35 text-div mb6">
                <div class="w-80 footer-div">
                    <p class="boldspace">EARNEST DEFINITION</p>
                    <br>
                    <p>Earnest individuals are genuine, sincere, and put
                        forth honest effort in what they do, demonstrating a deep level of dedication and integrity.
                    </p>
                </div>
            </div>
            <div class="w-30 text-div newsletter footer-div">
                <p class="boldspace">NEWSLETTER</p>
                <br>
                <newsletter />
            </div>
        </div>
        <div class="">
            <p class="copyright">© 2024 The Earnest Project by <a href="https://upschool.org" class="bluecursor">UP
                    School</a></p>
        </div>
        <div class="twenty-spacer"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            copied: false
        };
    },
    methods: {
        copyEmail() {
            const email = 'info@upschool.org';
            navigator.clipboard.writeText(email)
                .then(() => {
                    this.copied = true;
                    setTimeout(() => {
                        this.copied = false;
                    }, 1500);
                })
                .catch(error => {
                    console.error('Failed to copy:', error);
                });
        }
    }
};
</script>