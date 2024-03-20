<template>
  Microfrontend Playground
  <div class="dotted">
    <QuotationMfe :endpoint="ep" :headers="headers"></QuotationMfe>
  </div>
</template>

<script setup>
import QuotationMfe from './components/QuotationMfe'
const ep = 'http://localhost:8003/quotation/123'
const headers = {
  Accept: 'Application/json',
  'Content-Type': 'Application/json'
}
</script>
<style lang="scss">
@import "./assets/scss/index.scss";
</style>
