<template>
  Core Components Playground
  EST: <pre>{{ formModel }}</pre>
  <div class="dotted">
    <QuoterForm v-model="formModel" />
  </div>
  <div class="dotted">
    <QuotationDetail :quotation="quotation" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import QuoterForm from './lib/QuoterForm.vue'
import QuotationDetail from './lib/QuotationDetail.vue'
const formModel = reactive({})

const quotation = reactive({
  quotationId: '123-456-324-12344',
  birthdate: new Date('12/12/1999'),
  plate: 'AB 563 WS',
  vehicle: {
    brand: 'Opel',
    model: 'Corsa',
    year: 2001
  },
  status: 'expired',
  price: {
    currency: '€',
    value: 478.99
  },
  expireDate: new Date('03/11/2024')
})
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
