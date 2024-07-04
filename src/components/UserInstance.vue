<script setup>
defineProps(['name', 'age', 'username'])
</script>
<template>
  <div class="user-container">
    <div class="user-name">Nome: {{ name }}</div>
    <div class="user-age">Idade: {{ age }}</div>
    <div class="user-username">Username: {{ username }}</div>
  </div>
</template>
<style>
.user-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 5px;
}
.user-name,
.user-age,
.user-username {
  align-content: center;
  padding: 1rem;
}
</style>
