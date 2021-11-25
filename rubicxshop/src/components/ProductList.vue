<template>
    <div class="product-list">
      <div class="flex top-information">
      <h1>rrr</h1>
    </div>



  <div class="flex"
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
      </div>
    </div>
    
</template>

<script>
import ProductCard from './ProductCard.vue'
import MyInput from './MyInput.vue'

export default {
  name: 'ProductList',
  components: {ProductCard, MyInput},
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

<style lang="scss" scoped>
.flex {
  text-align: center;
}
.top-information {
  align-items: center;
  h1 {
    margin-bottom: 0;
  }
  button {
    background-color: rgb(221, 56, 56);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    display: block;
    cursor: pointer;
    margin-left: 10px;
  }
  margin-bottom: 22px;
}
</style> >

