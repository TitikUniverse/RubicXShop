<template>
  <div class="product-card">
    <img
      :src="imgUrl" 
      width="300px"
    >
    <div class="product-card__info">
      <h2>{{ title }}</h2>
      <p class="price">{{ price }}р.</p>
      <p class="count">Доступно для доставки {{ count }}шт.</p>
      <button type="button" @click="addToBasket"> Купить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      validator(value) {
        return value.length < 50
      }
    },
    price: {
      type: Number,
      required: true
    },
    imgUrl: {
      type: String,
      default: 'https://tsum.by/images/no-photo.png'
    },
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    addToBasket() {
      this.$emit('addToBasket')
    }
  }
}
</script>

<style scoped >

</style>