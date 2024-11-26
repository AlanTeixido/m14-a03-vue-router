<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  padding: 2rem;
  background-color: #bbb;
  margin-bottom: 2rem;
}

nav {
  display: flex;
  gap: 1rem;
}

main {
  width: min(100% - 4rem, 1000px);
  margin-inline: auto;
}
</style>
