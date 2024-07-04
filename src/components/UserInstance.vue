<script setup lang="ts">
defineProps(['firstname', 'lastname', 'age', 'username', 'picture'])
</script>
<template>
  <div class="user-container">
    <div class="user-picture"><img :src="picture" /></div>
    <div class="user-name">Nome: {{ firstname + ' ' + lastname }}</div>
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
  border: 1px solid black;
}
.user-name,
.user-age,
.user-username {
  align-content: center;
  padding: 1rem;
}
</style>
