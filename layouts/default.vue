<template>
  <div class="defaultLayoutContainer h-full bg-white">
    <Title>{{ title }}</Title>
    <NavBar />
    <main class="h-full">
      <slot />
    </main>

  </div>
</template>

<script setup lang="ts">
const title = import.meta.env.VITE_APP_NAME || 'Nuxt App'
</script>