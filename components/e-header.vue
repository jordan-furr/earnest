<template>
    <nav class="ph5 pt4">
        <div class="flex flex-row space-between">
            <p><NuxtLink class="logo-title" to="/">The Earnest Project</NuxtLink></p>
            <div class="flex flex-row flex-start">
                <div class="flex flex-row nav-menu">
                    <p>
                        <NuxtLink class="menu-item" to="/manifesto" exact-active-class="active">Manifesto</NuxtLink>
                    </p>
                    <p>
                        <NuxtLink class="menu-item" to="/champions" exact-active-class="active">Champions</NuxtLink>
                    </p>
                    <p>
                        <NuxtLink class="menu-item" to="/about" exact-active-class="active">About</NuxtLink>
                    </p>
                    <p>
                        <NuxtLink class="menu-item" to="/events" exact-active-class="active">Events</NuxtLink>
                    </p>
                    <p>
                        <NuxtLink class="menu-item" to="/collaborate" exact-active-class="active">Collaborate</NuxtLink>
                    </p>
                    <p>
                        <NuxtLink class="menu-item" to="/patch" exact-active-class="active">STAY EARNEST</NuxtLink>
                    </p>
                </div>
            </div>

        </div>
    </nav>
</template>