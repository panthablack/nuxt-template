<template>
  <div class="homePageContainer">
    <Title>Home</Title>
    <h1>home</h1>
    <h1>Count: <b>{{ count }}</b></h1>
    <button @click="increment">Increment</button>
    <LoadingSpinner />
  </div>
</template>

<script setup lang="ts">
const count = ref(1) // ref is auto-imported
const increment = () => count.value++
</script>