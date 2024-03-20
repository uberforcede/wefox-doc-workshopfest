<template>
  Microfrontend Playground
  <div class="dotted">
    <QuoterMfe :endpoint="ep" :headers="headers"></QuoterMfe>
  </div>
</template>

<script setup>
import QuoterMfe from './components/QuoterMfe'
const ep = 'http://localhost:3000/quotation'
const headers = {
  Accept: 'Application/json',
  'Content-Type': 'Application/json'
}
</script>
<style lang="scss">
@import "./assets/scss/index.scss";
</style>
