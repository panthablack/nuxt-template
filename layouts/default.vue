<template>
  <div class="defaultLayoutContainer h-full bg-blue-300">
    <Title>{{ title }}</Title>
    <header>
      <NavBar />
    </header>
    <div class="paeContainer px-4 py-8 max-w-4xl m-auto">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const title = import.meta.env.VITE_APP_NAME || 'Nuxt App'
</script>