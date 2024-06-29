<template>
    <div class="ph5 pv6 h-85vh">
        <div class="flex flex-row">
            <div class="w-25">
                <div class="mb7">
                    <p class="boldspace">COLLABORATE</p>
                    <br>
                    <p>We are always curious to explore co-hosting community events, researching earnest projects/people,
                        and creating otherwise earnest material. Please reach out to explore what you have in mind.</p>
                </div>
                <div class="mb7">
                    <p class="boldspace">INTERVIEW</p>
                    <br>
                    <p>Are you interested in being interviewed for The Earnest Project? Please feel free to get in touch
                        with us.</p>
                </div>
                <div class="mb7">
                    <p class="boldspace">RESEARCH</p>
                    <br>
                    <p>Would you like to aid in research for The Earnest Project?</p>
                </div>
                <span @click="copyEmail" style="color: white;" class="contactemail">info@upschool.org</span>
                <span v-if="copied" class="copied">copied!</span>
            </div>
            <div class="w-75 text-center">
                <img class="w-60" src="/img/Earnest Venn Diagram.png" alt="">
            </div>
        </div>
    </div>
    <div class="logo-patch-container w-15">
        <a href="/patch"><img class="logo-patch w-90 float-right" src="/img/Earnest Project Patch.png" alt=""></a>
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