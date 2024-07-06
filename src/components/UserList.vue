<script setup lang="ts">
import storeJSONData from '../stores/storeJSONData.ts'
import UserInstance from './UserInstance.vue'

const JSONData = storeJSONData()
</script>

<template>
  <div v-if="JSONData.BruteJSONData != null">
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
  </div>
  <div v-else>ESCOLHA AS OPÇÕES E PRESSIONE EM "ATUALIZAR"</div>
</template>
<style>
.user-list-container {
  display: grid;
  /**https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout */
  grid-template-columns: repeat(7, auto);
  padding: 1%;
  width: 100%;
  justify-items: center;
}
</style>
