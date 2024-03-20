<template>
  <div class="mf-quotation">
    <QuotationDetail :quotation="quotation" />
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import QuotationDetail from '@workshopfest/core-libs/QuotationDetail.vue'
import axios from 'axios'

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

const emit = defineEmits(['success', 'error'])

const quotation = ref({})

onBeforeMount(() => {
  axios.get(props.endpoint, props.headers)
    .then(res => {
      quotation.value = res.data
      emit('success', quotation.value)
    })
    .catch(err => {
      emit('error', err)
    })
})

</script>
