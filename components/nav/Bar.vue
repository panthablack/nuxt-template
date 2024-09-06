<template>
  <nav
    class="navbarContainer p-6 flex items-center shadow-md justify-between border-b-blue-950 border-b-2 bg-blue-400 text-blue-50 text-lg font-bold"
  >
    <div class="logoContainer">
      <span>Logo Goes here</span>
    </div>
    <div class="linksContainer">
      <ul class="flex items-center justify-center gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/pinia">Pinia</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="loginLinksContainer">
      <NuxtLink to="/auth/login">Login</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply text-amber-300;
}
</style>