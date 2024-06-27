<template>
  <div>
    <e-header />
    <NuxtPage />
    <div class="logo-patch-container">
      <img class="logo-patch" src="/img/Earnest Project Patch.png" alt="">
    </div>
  </div>
</template>


<script setup lang="ts">
useHead({
  title: 'Earnest Project',
  meta: [
    { name: 'Earnest Project', content: 'Welcome to the Earnest Project.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>