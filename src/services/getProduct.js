import productListJson from '@/assets/products.json'

export function getProducts() {
  return productListJson
}

export function getProduct(id) {
  return productListJson.find((product) => product.id === id)
}
