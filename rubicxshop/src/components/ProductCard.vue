<template>
  <div class='cart-item'>
    <img src="https://i.imgur.com/3kRgbVi.jpg" alt="img">
    <p>Item 1</p>
    <p>Цена: 100</p>
    <div class="button">
    <button>Купить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props:{
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data(){
    return{}
  },
  computed:{}
}
</script>

<style lang="scss" scoped>

  .cart-item {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    width: 291px;
    float: left;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.379);

  }

  .cart-item>img {
    width: 100%;
    border-radius: 20px;
  }

  
.button {
  background: #005bff;
  color: white;
  border: 0;
  border-radius: 6px;
  height: 30px;
  width: 68px;
  font-weight: bold;
  font-size: 1em;
  background-color: red;


}


</style>