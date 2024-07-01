<template>
    <div class="menu-icon" @click="toggleMenu">
        <span v-if="!isOpen">&#43;</span>
        <span v-else>&times;</span>
    </div>
  </template>
  
  <script>
  export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleMenu() {
      this.$emit('toggle-menu');
    }
  }
}
  </script>
  