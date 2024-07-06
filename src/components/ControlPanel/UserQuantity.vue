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
  <div class="user-quantity-container">
    <select class="user-quantity-selector" v-model="UsersSetup.quantity">
      <option disabled value="">Escolha a quantidade de usuários</option>
      <option v-for="numero in arrayContagemUsuarios" :value="numero">{{ numero }}</option>
    </select>
  </div>
</template>
<style>
.user-quantity-selector {
  box-sizing: border-box;
  border-radius: 0.25em;
  padding: 0.5em;
  align-items: center;
  height: 3em;
  width: 4em;
}
.user-quantity-container {
  display: flex;
  align-items: center;
}
</style>
