<script setup>
import { getProducts } from '@/services/getProduct'
const products = getProducts()
</script>

<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      <RouterLink :to="`/products/${product.id}`">{{ product.name }}</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
}
</style>
