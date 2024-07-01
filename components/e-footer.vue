<template>
    <div class="mb4">
        <div class="flex flex-row mb5 footer">
            <div class="w-33 text-div">
                <p class="boldspace">THE EARNEST PROJECT</p>
                <br>
                <p class="mb1">Stay Earnest.</p>
                <span @click="copyEmail" style="color: white;" class="contactemail">info@upschool.org</span>
                <span v-if="copied" class="copied">copied!</span>
                <br>
                <br>
                <div class="w-20">
                    <a target="_blank" href="https://www.instagram.com/theearnestproject/"><img class="w-20 bluecursor ig"
                            src="/img/ig.webp" alt=""></a>
                </div>
            </div>
            <div class="w-33 text-div newsletter">
                <newsletter />
            </div>
        </div>
        <div>
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