<script setup lang="ts">
import storeUsersSetup from '../../stores/storeUsersSetup.ts'
import storeJSONData from '../../stores/storeJSONData.ts'
const userSetup = storeUsersSetup()
const JSONData = storeJSONData()
async function refreshData() {
  userSetup.buildURL()
  console.log(userSetup.finalURL)
  await JSONData.getData()
}
</script>
<template>
  <div class="button-refresh-data-container">
    <button class="button-refresh-data" @click="refreshData">Atualizar</button>
  </div>
</template>
<style>
.button-refresh-data {
  height: 4em;
  width: 6em;
}
.button-refresh-data-container {
  display: flex;
}
</style>
