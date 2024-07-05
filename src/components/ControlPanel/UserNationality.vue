<script setup lang="ts">
import { ref } from 'vue'
import storeUsersSetup from '../../stores/storeUsersSetup.ts'

const UsersSetup = storeUsersSetup()
const nations = ref([
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
  <div>Nacionalidade escolhida: {{ UsersSetup.nationality }}</div>
  <button @click="UsersSetup.uncheckCheckboxes('.checkbox-nationality', UsersSetup.nationality)">
    Desmarcar todos
  </button>
  <div class="container-checkbox-nationality" v-for="nation in nations" :key="nation.text">
    <input
      class="checkbox-nationality"
      v-model="UsersSetup.nationality"
      type="checkbox"
      :value="nation.value"
    />
    <label :for="nations.value">{{ nation.text }}</label>
  </div>
</template>
<style></style>
