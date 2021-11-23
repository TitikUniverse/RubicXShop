<template>
    <div class="product-list">




 <ul class="list-default flex">
      <li
        v-for="(product, index) in products"
        :key="index"
      >
        <product-card
          :title="product.title"
          :price="product.price"
          :img-url="product.imgUrl"
          :count="product.count"
          @addToBasket="addToBasket(index)"
        />
      </li>
    </ul>
    </div>
    
</template>

<script>
import ProductCard from './ProductCard'

export default {
  name: 'ProductList',
  components: {},
  data() {
    return {
      searchText: '',
      products: [
        {
          title: 'Толстовка',
          price: 30,
          imgUrl: '',
            
        },
        {
          title: 'Футболка',
          price: 15,
          imgUrl: '',
          
        },
        {
          title: 'Портативная зарядка',
          price: 18,
          imgUrl: '',
          
        },
        {
          title: 'Силиконовые слэп-часы флешка',
          price: 16,
          imgUrl: '',
          
        },
        {
          title: 'Часы с силиконовым ремешком',
          price: 14,
          imgUrl: '',
          
        },
         {
          title: 'Термокружка',
          price: 12,
          imgUrl: '',
          
        },
        {
          title: 'Флешка',
          price: 10,
          imgUrl: '',
          
        },
        {
          title: 'Сумка',
          price: 8,
          imgUrl: '',
          
        },
        {
          title: 'Коврик для мыши',
          price: 6,
          imgUrl: '',
          
        },
        {
          title: 'Бейсболка',
          price: 10,
          imgUrl: '',
          
        },
         {
          title: 'Кружка',
          price: 9,
          imgUrl: '',
          
        },
        {
          title: 'Мешок для сменной обуви',
          price: 8,
          imgUrl: '',
          
        },
        {
          title: 'Попсокет',
          price: 4,
          imgUrl: '',
          
        },
        {
          title: 'Ручка',
          price: 3,
          imgUrl: '',
          
        },
        {
          title: 'Значок',
          price: 2,
          imgUrl: '',
          
        },
        {
          title: 'Браслет',
          price: 2,
          imgUrl: '',
          
        },
      ]
    }
  },
  methods: {
    addToBasket(index) {
      console.log(index)
    }
  }
}
</script>

<style  scoped>

</style> >

