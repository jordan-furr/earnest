<template>
    <div class="header">
        <div class="ph5 pv4 header-cont">
            <nav>
                <div class="flex flex-row space-between align-center">
                    <p>
                        <a href="/" class="logo-title">The Earnest Project</a>
                    </p>
                    <div class="flex flex-row flex-start">
                        <div class="flex flex-row nav-menu">
                            <p>
                                <a href="/about" class="menu-item"  exact-active-class="active">Manifesto</a>
                            </p>
                            <p>
                                <a href="/champions" class="menu-item" exact-active-class="active">Champions</a>
                            </p>
                            <p>
                                <a href="/collaborate" class="menu-item" exact-active-class="active">Collab</a>
                            </p>
                            <p>
                                <a href="/patch" class="menu-item" to="/patch" exact-active-class="active">STAY EARNEST</a>
                            </p>
                        </div>
                    </div>
                    <div class="mobile-menu">
                        <menuIcon :isOpen="isMenuVisible" @toggle-menu="toggleMenu" />
                        <menuOverlay :isVisible="isMenuVisible" @toggle-menu="toggleMenu" />
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuVisible: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible;
        }
    }
}
</script>