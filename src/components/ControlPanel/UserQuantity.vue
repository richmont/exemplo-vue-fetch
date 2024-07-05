<script setup lang="ts">
import { ref } from 'vue'
import storeUsersSetup from '../../stores/storeUsersSetup.ts'

const UsersSetup = storeUsersSetup()

const arrayContagemUsuarios: number[] = [1]
for (let i = 5; i <= 50; i += 5) {
  arrayContagemUsuarios.push(i)
}
</script>
<template>
  <div>Selected: {{ UsersSetup.quantity }}</div>

  <select v-model="UsersSetup.quantity">
    <option disabled selected value="">Escolha a quantidade de usuários</option>
    <option v-for="numero in arrayContagemUsuarios" :value="numero">{{ numero }}</option>
  </select>
</template>
<style></style>
