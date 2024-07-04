<script setup>
import UserInstance from './UserInstance.vue'

async function getData() {
  const url = 'http://127.0.0.1:5000/'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()

    return json.result
  } catch (error) {
    console.error(error.message)
  }
}
const userData = await getData()
</script>

<template>
  <div class="user-list-container">
    <div class="user-instance" v-for="user in userData" :key="user.name">
      <UserInstance :name="user.name" :age="user.age" :username="user.username" />
    </div>
  </div>
</template>
<style>
.user-list-container {
  display: flex;
  flex-direction: row;
}
</style>
