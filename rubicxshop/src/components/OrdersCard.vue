<template>
  <div class="catalog__list">
      <order
       v-for="product in products"
          :key="product.article"
          v-bind:product_data="product"
       />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>