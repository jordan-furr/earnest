<template>
  <div class="app-container">
    <e-header />
    <div class="page-container">
      <NuxtPage />
    </div>
    <e-footer />
  </div>
</template>


<script setup lang="ts">
useSeoMeta({
  title: 'Earnest Project',
  ogTitle: 'Earnest Project',
  description: 'Can Earnestness Change the World? Our Exploration Begins Here',
  ogDescription: 'Can Earnestness Change the World? Our Exploration Begins Here',
  ogImage: '/img/Earnest Social Share.png'
})
</script>