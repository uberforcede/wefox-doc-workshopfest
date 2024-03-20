<template>
  <HeaderBar />
  <div class="main-content-container">
    <slot name="main-content"></slot>
  </div>
  <FooterBar />
</template>
<script setup>
import HeaderBar from '../commons/HeaderBar'
import FooterBar from '../commons/FooterBar'

</script>
