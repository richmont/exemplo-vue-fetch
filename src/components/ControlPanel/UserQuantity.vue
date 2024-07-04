<script setup lang="ts">
import { ref } from 'vue'

const quantityvalue = ref('')
</script>
<template>
  <div>Selected: {{ quantityvalue }}</div>

  <select v-model="quantityvalue">
    <option disabled value="">Please select one</option>
    <option></option>
    <option></option>
    <option></option>
  </select>
</template>
<style></style>
