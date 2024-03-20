<template>
  <div class="quotation-content-wrapper">
    <QuotationMfe :endpoint="ep" :headers="headers" />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
const QuotationMfe = defineAsyncComponent(() => import('Quotation/QuotationMfe'))
const route = useRoute()
const quotationId = route.params.id
const ep = `http://localhost:3000/quotation/${quotationId}`
const headers = {
  'content-type': 'application/json',
  accept: 'application/json'
}
</script>
