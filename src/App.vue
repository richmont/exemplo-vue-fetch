<script setup lang="ts">
import UserList from './components/UserList.vue'
import ControlPanel from './components/ControlPanel.vue'
</script>

<template>
  <header></header>

  <main>
    <div class="main-container">
      <ControlPanel />
      <Suspense>
        <UserList />
        <template #fallback> Carregando... </template>
      </Suspense>
    </div>
  </main>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
}
UserList {
}
</style>
