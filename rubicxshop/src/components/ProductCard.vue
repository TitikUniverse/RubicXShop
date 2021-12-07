<template>
  <div class='cart-item'>
    <img src="https://i.imgur.com/3kRgbVi.jpg" alt="img">
    <span id="name">1fffffffffffffffffffffffffffffffffffffffffffffffffffff</span>
    <span id="price">100 R</span>
    <button id="button">Купить</button>
    
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
    width: 291px;
    float: left;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.379);
    margin: 10px 10px;

  }

  .cart-item>img {
    width: 100%;
    border-radius: 20px;
  }

  

#button{
  position: relative;  
  top: -30px;
  margin: 0 0 0% 65%;
  
  background: #8000ff;
  color: white;
  border: 0;
  border-radius: 10px;
  height: 30px;
  width: 80px;
  font-weight: bold;
  font-size: 0.8em;
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
  width: 60%;
  font-size: 18px;
  font-weight: 500;
  padding: 0 5%;
}



</style>