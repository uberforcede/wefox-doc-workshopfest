<template>
  <div class="quotation-card">
    <div class="top">
      <div class="title">{{quotation?.plate}} <Tag :value="quotation?.status" severity="info" ></Tag></div>
      {{quotation?.vehicle?.brand}} {{quotation?.vehicle?.model}} ({{ quotation?.vehicle?.year }})
    </div>
    <div class="middle">
      <div class="price">{{quotation?.price?.value}} €</div>
    </div>
    <div class="bottom">
      Valid until: {{quotation?.expireDate}}
    </div>
  </div>
</template>

<script setup>
import Tag from 'primevue/tag'

defineProps({
  quotation: {
    type: Object,
    default: () => {}
  }
})
</script>
