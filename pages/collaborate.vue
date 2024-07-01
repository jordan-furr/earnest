<template>
    <div class="ph5 pv6 h-85vh">
        <div class="flex flex-row space-between">
            <div class="mb7 w-20">
                <div class="w-90">
                    <div class="mb6">
                        <p class="boldspace">COLLABORATE</p>
                        <br>
                        <p>We are always curious to explore co-hosting community events, researching earnest
                            projects/people,
                            and creating otherwise earnest material. Please reach out to explore what you have in mind.</p>
                    </div>
                    <div class="mb6">
                        <p class="boldspace">INTERVIEW</p>
                        <br>
                        <p>Are you interested in being interviewed for The Earnest Project?</p>
                    </div>
                    <div class="mb6">
                        <p class="boldspace">RESEARCH</p>
                        <br>
                        <p>Would you like to aid in research for The Earnest Project?</p>
                    </div>
                </div>
            </div>
            <div class="w-60 mt6 ph3">
                <div class="flex flex-col">
                    <div class="text-center">
                        <div class="hover-whole">
                            <p class="home-word mh3">wholehearted</p>
                            <div class="popup-whole popup">
                                <p>with complete sincerity and commitment.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row">
                        <div class="w-30 flex flex-col space-around text-right">
                            <div class="float-right">
                                <div class="text-right hover-auth">
                                    <p class="home-word">authentic</p>
                                    <div class="popup-auth popup">
                                        <p>true to your own personality, values, and spirit, regardless of the pressure that
                                            you're under to act otherwise.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="float-right">
                                <div class="text-right hover-pass">
                                    <p class="home-word">passionate</p>
                                    <div class="popup-pass popup">
                                        <p>having a strong belief in something.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-40 home-venn">
                            <img class="w-100 fade-in" src="/img/Earnest Venn Diagram Only.png" alt="">
                        </div>
                        <div class="w-30 flex flex-col space-around">
                            <div class="float-left">
                                <div class="hover-mind">
                                    <p class="home-word">mindful</p>
                                    <div class="popup-mind popup">
                                        <p>true to your own personality, values, and spirit, regardless of the pressure that
                                            you're under to act otherwise.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="float-left">
                                <div class="hover-dili">
                                    <p class="home-word">diligent</p>
                                    <div class="popup-dili popup">
                                        <p>true to your own personality, values, and spirit, regardless of the pressure that
                                            you're under to act otherwise.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="hover-princp">
                            <p class="home-word mh3">principled</p>
                            <div class="popup-princp popup">
                                <p>active with integrity and honesty, with a strong sense of fairness, justice and respect.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-20 text-right">
                <div class="mb6">
                    <p class="boldspace">CONTACT</p>
                    <br>
                    <span v-if="copiedLeft" class="copiedLeft">copied!</span>
                    <span @click="copyEmail" style="color: white;" class="contactemail">info@upschool.org</span>
                </div>
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