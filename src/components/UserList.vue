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
    console.log('Dados da api: ', json.result)
    return json.result
  } catch (error) {
    console.error(error.message)
  }
}
const userData = await getData()
</script>

<template>
  <UserInstance
    v-for="user in userData"
    :key="user.name"
    :name="user.name"
    :age="user.age"
    :username="user.username"
  />
</template>
