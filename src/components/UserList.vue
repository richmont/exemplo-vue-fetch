<script setup lang="ts">
import storeUsersSetup from '../stores/storeUsersSetup.ts'
import storeJSONData from '../stores/storeJSONData.ts'
import UserInstance from './UserInstance.vue'

const userSetup = storeUsersSetup()
const JSONData = storeJSONData()
userSetup.buildURL()

JSONData.url = userSetup.finalURL
await JSONData.getData()
</script>

<template>
  <div class="user-list-container">
    <div class="user-instance" v-for="user in JSONData.BruteJSONData" :key="user.name.first">
      <UserInstance
        :picture="user.picture.large"
        :firstname="user.name.first"
        :lastname="user.name.last"
        :age="user.dob.age"
        :username="user.login.username"
      />
    </div>
  </div>
</template>
<style>
.user-list-container {
  display: grid;
  /**https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout */
  grid-template-columns: repeat(6, auto);
  padding-bottom: 1rem;
}
</style>
