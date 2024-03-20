<template>
  <div class="home-content-wrapper">
    <QuoterMfe @success="onQuotationCreated" @error="onQuotationError" :endpoint="ep" :headers="headers" />
  </div>
</template>

<script setup>
import { defineAsyncComponent, inject } from 'vue'
const QuoterMfe = defineAsyncComponent(() => import('Quoter/QuoterMfe'))
const emitter = inject('emitter')
const ep = 'http://localhost:3000/quotation'
const headers = {
  Accept: 'Application/json',
  'Content-Type': 'Application/json'
}

const onQuotationCreated = (quotation) => {
  emitter.emit('QUOTATION_CREATED', quotation)
}
const onQuotationError = (err) => {
  emitter.emit('QUOTATION_ERROR', err)
}
</script>
