<template>
  <nav id="navbar" class="navbar">
    <div class="logo">
      <WefoxLogo />
    </div>

    <div id="links" class="links">
      <a class="item">
        <Button label="Contact Us" severity="primary" outlined />
      </a>
    </div>
  </nav>
</template>
<script setup>
import Button from 'primevue/button'
import WefoxLogo from './WefoxLogo.vue'
</script>
