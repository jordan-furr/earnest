<template>
    <div class="menu-overlay" v-if="isVisible" @click="toggleMenu">
        <nav @click.stop>
            <ul>
                <li>
                    <NuxtLink class="menu-item" to="/" @click="closeMenu" exact-active-class="active">Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="menu-item" to="/about" @click="closeMenu" exact-active-class="active">About
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="menu-item" to="/champions" @click="closeMenu" exact-active-class="active">Champions
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="menu-item" to="/collaborate" @click="closeMenu" exact-active-class="active">Collab
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="menu-item" to="/patch" @click="closeMenu" exact-active-class="active">STAY EARNEST
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
  
<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        toggleMenu() {
            this.$emit('toggle-menu');
        },
        closeMenu() {
            this.$emit('toggle-menu');
        }
    }
}
</script>  