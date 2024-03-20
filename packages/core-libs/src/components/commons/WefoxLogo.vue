<template>
  <img alt="logo" class="weblogo" :class="cssClass" :src="logo" />
</template>

<script setup>
import { STATIC_LOGO } from '../../constants/images'

const logo = STATIC_LOGO

</script>

<style scoped lang="scss">
.weblogo{
  cursor: pointer;
}
</style>
