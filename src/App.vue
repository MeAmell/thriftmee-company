<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w-screen h-screen">
      <RouterView />
      <RouterView name="Footer" />
  </div>

</template>

<style scoped>
</style>
