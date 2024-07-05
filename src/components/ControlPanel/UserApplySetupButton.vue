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
<template><button @click="refreshData">Atualizar</button></template>
<style></style>
