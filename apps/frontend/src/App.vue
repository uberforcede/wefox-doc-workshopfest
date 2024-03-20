<template>
  <StandardLayout>
    <template v-slot:main-content>
      <Message v-if="messageConfig.show" :severity="messageConfig.severity">{{ messageConfig.message }}</Message>
      <router-view />
    </template>
  </StandardLayout>
</template>

<script setup>
import { inject, ref } from 'vue'
import StandardLayout from './components/layouts/StandardLayout.vue'
import Message from 'primevue/message'
const emitter = inject('emitter')
const messageConfig = ref({
  show: false,
  severity: 'info',
  message: ''
})

emitter.on('QUOTATION_CREATED', q => {
  messageConfig.value.show = true
  messageConfig.value.severity = 'success'
  messageConfig.value.message = `Il preventivo è stato inviato via mail ${q.data.quotationId}`
})
emitter.on('QUOTATION_ERROR', q => {
  messageConfig.value.show = true
  messageConfig.value.severity = 'error'
  messageConfig.value.message = 'Opps, riprova!'
})
</script>
<style lang="scss">
@import "./assets/scss/index.scss";
</style>
