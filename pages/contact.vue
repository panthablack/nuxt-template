<template>
  <div class="contactPageContainer">
    <h1>contact</h1>
    <h2>X: {{ mouse.x }}, Y: {{ mouse.y }}</h2>
    <img
      src="/assets/images/viaduct.jpg"
      alt=""
    >
  </div>
</template>

<script setup lang="ts">
const mouse = useMouse()
</script>