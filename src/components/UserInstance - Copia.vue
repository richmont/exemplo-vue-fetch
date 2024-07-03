<script setup>
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
  <li v-for="item in userData" :key="item.name">
    Nome: {{ item.name }} Idade: {{ item.age }} Nome de usuário: {{ item.username }}
  </li>
</template>
