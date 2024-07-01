<template>
  <div class="app-container">
    <e-header />
    <NuxtPage />
    <e-footer />
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