<script setup>
import ProductDetail from '@/components/ProductDetail.vue'
import { getProduct } from '@/services/getProduct'
import { useRoute } from 'vue-router'

const route = useRoute()

const product = getProduct(route.params.id)
const { name, description, id } = product
</script>

<template>
  <section>
    <h2>Product detail</h2>

    <ProductDetail :name="name" :description="description" :id="id" />
  </section>
</template>

<style scoped></style>
