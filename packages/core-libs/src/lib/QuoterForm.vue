<template>
  <form @submit.prevent class="quoter-form">
    <div class="control type">
      <SelectButton v-model="model.vehicleType" :options="options" />
    </div>
    <div class="control plate">
        <InputMask id="plate" v-model="model.plate" mask="aa 999 aa" placeholder="AB 123 CD" />
    </div>
    <div class="control birthdate">
        <InputMask id="birthdate" v-model="model.birthdate" mask="9999-99-99" placeholder="yyyy-mm-dd" />
    </div>
  </form>
</template>

<script setup>
import SelectButton from 'primevue/selectbutton'
import InputMask from 'primevue/inputmask'
import { computed } from 'vue'

const options = ['Car', 'Motorcycle', 'Autobus', 'Rocket', 'Spaceship']

const emit = defineEmits('update:modelValue')
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {}
  }
})

const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})

</script>
