<script setup>
import UserInstance from './UserInstance.vue'
</script>
<template>
  <Suspense>
    <!-- component with nested async dependencies -->
    <UserInstance />
    <!-- loading state via #fallback slot -->
    <template #fallback> Loading... </template>
  </Suspense>
</template>
