<template>
  <div class="defaultLayoutContainer h-full bg-white">
    <Title>{{ title }}</Title>
    <NavAbsoluteHeader />
    <main class="h-full">
      <slot />
    </main>
    <NavFooter />
  </div>
</template>

<script setup lang="ts">
const title = import.meta.env.VITE_APP_NAME || 'Nuxt App'
</script>