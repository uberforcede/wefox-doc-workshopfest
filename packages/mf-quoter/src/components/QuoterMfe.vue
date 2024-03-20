<template>
  <div class="mf-quoter">
    <h1>Cosa vorresti assicurare?</h1>
    <QuoterForm v-model="formModel" />
    <Button @click="createQuotation" label="Get your price!" />
  </div>
</template>

<script setup>
import axios from 'axios'
import QuoterForm from '@workshopfest/core-libs/QuoterForm.vue'
import Button from 'primevue/button'
import { reactive } from 'vue'

const emit = defineEmits(['success', 'error'])
const props = defineProps({
  endpoint: {
    type: String,
    default: ''
  },
  headers: {
    type: Object,
    default: () => {}
  }
})
const formModel = reactive({})

const createQuotation = () => {
  axios.post(props.endpoint, formModel, props.headers)
    .then(res => emit('success', res))
    .catch(err => emit('error', err))
}
</script>
