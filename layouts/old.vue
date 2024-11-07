<template>
  <div class="defaultLayoutContainer h-full">
    <Title>{{ title }}</Title>
    <slot />
  </div>
</template>

<script setup lang="ts">
const title = import.meta.env.VITE_APP_NAME || 'Nuxt App'
</script>