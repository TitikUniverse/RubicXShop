<template>
  <div class='cart-item'>
    <img :src=productData.imageUrl alt="img">
    <span id="name">{{productData.name}}</span>
    <div id="bottom">
      <span id="price">{{productData.price}} R</span>
      <button class="buy-btn purple-color">Подробнее</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props:{
    productData: {
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
  width: 16rem;
  float: left;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.379);
  margin: 10px 10px;

}

.cart-item>img {
  width: 100%;
  border-radius: 20px;
}

.buy-btn  {
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  color: white;
  padding: 5px 10px;

  border: 3px solid transparent;
  transition: all 0.2s;
}
.buy-btn:focus {
  outline: none;
}
// .buy-btn:hover {
//   border: 3px solid #694dc6;
//   background-color: #694dc61f;
// }

.purple-color {
  background-color: #694dc6;
}

span{
  font-size: 16px;
}

#name{
width: 90%;
word-wrap: break-word;
font-weight: 650;
padding: 5% 5%;
}

#price{
  font-size: 18px;
  font-weight: 500;
}

#bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 5% 5% 5%;
}


</style>