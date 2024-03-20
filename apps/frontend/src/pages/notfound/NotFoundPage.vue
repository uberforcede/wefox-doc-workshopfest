<template>
  <div class="not-found-wrapper">
    <div class="p-2"><WefoxLogo></WefoxLogo></div>
    <div class="p-2">Oopps! Page not found</div>
  </div>
</template>

<script setup>
import WefoxLogo from '../../components/commons/WefoxLogo.vue'
</script>

<style scoped lang="scss">
.not-found-wrapper{
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
