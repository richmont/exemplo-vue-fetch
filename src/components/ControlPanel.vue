<script setup lang="ts">
import UserNationality from './ControlPanel/UserNationality.vue'
import UserApplySetupButton from './ControlPanel/UserApplySetupButton.vue'
import UserQuantity from './ControlPanel/UserQuantity.vue'
import storeUsersSetup from '../stores/storeUsersSetup.ts'
const userSetup = storeUsersSetup()
</script>
<template>
  <div class="control-panel-container">
    <UserNationality />
    <UserApplySetupButton />
    <UserQuantity />
    {{ userSetup.finalURL }}
  </div>
</template>
<style></style>
