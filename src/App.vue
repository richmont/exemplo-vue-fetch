<script setup>
import UserList from './components/UserList.vue'
import UserInstance from './components/UserInstance.vue'
</script>

<template>
  <header>
    <!--<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->

    <div class="wrapper">
      <!--<HelloWorld msg="You did it!" />-->
    </div>
  </header>

  <main>
    Testando
    <Suspense>
      <!-- component with nested async dependencies -->
      <UserList />
      <!-- loading state via #fallback slot -->
      <template #fallback> Loading... </template>
    </Suspense>

    <!--<TheWelcome />-->
  </main>
</template>

<style scoped></style>
