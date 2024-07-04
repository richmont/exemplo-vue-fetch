<script setup>
import UserInstance from './UserInstance.vue'

async function getData() {
  const url = 'https://randomuser.me/api/?nat=BR&results=30&inc=name,login,dob,postcode&format=json'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()

    return json.results
  } catch (error) {
    console.error(error.message)
  }
}
const userData = await getData()
</script>

<template>
  <div class="user-list-container">
    <div class="user-instance" v-for="user in userData" :key="user.name.first">
      <UserInstance
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
