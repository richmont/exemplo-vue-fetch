<script setup>
import { ref } from 'vue'

const nationalityvalue = ref('')
const nations = ref([
  { text: 'Aleatório', value: null },
  { text: 'Austrália', value: 'AU' },
  { text: 'Brasil', value: 'BR' },
  { text: 'Canadá', value: 'CA' },
  { text: 'Suíça', value: 'CH' },
  { text: 'Alemanha', value: 'DE' },
  { text: 'Dinamarca', value: 'DK' },
  { text: 'Espanha', value: 'ES' },
  { text: 'Finlândia', value: 'FI' },
  { text: 'França', value: 'FR' },
  { text: 'Reino Unido', value: 'GB' },
  { text: 'Irlanda', value: 'IE' },
  { text: 'Índia', value: 'IN' },
  { text: 'Irã', value: 'IR' },
  { text: 'México', value: 'MX' },
  { text: 'Países Baixos', value: 'NL' },
  { text: 'Noruega', value: 'NO' },
  { text: 'Nova Zelândia', value: 'NZ' },
  { text: 'Sérvia', value: 'RS' },
  { text: 'Turquia', value: 'TR' },
  { text: 'Ucrânia', value: 'UA' },
  { text: 'Estados Unidos da América', value: 'US' }
])
</script>
<template>
  <div>Nacionalidade escolhida: {{ nationalityvalue }}</div>
  <select v-model="nationalityvalue" multiple>
    <option disabled value="">Selecione uma</option>
    <option v-for="nation in nations" :value="nation.value" :key="nation.text">
      {{ nation.text }}
    </option>
  </select>
</template>
<style></style>
