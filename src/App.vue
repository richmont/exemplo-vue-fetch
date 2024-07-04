<script setup>
import UserList from './components/UserList.vue'
import ControlPanel from './components/ControlPanel.vue'
</script>

<template>
  <header><ControlPanel /></header>

  <main>
    <Suspense>
      <!-- component with nested async dependencies -->
      <UserList />
      <!-- loading state via #fallback slot -->
      <template #fallback> Carregando... </template>
    </Suspense>

    <!--<TheWelcome />-->
  </main>
</template>

<style scoped></style>
