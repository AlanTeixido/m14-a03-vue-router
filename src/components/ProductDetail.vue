<script setup>
const { name, description, id } = defineProps({
  name: String,
  description: String,
  id: String
})
</script>

<template>
  <article>
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <p>
      This is the product with id <span class="bold">{{ id }}</span>
    </p>
  </article>
</template>

<style scoped>
.bold {
  font-weight: 700;
}
</style>
