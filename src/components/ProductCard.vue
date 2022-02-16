<template>
  <div class='cart-item'>
    <img :src=productData.imageUrl alt="img">
    <span id="name">{{productData.name}}</span>
    <div id="bottom">
      <span id="price">
        {{productData.price}}
        R
      <!-- <img id="image" src="@/assets/RIcon.png" alt="R"> -->
      </span>
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
  margin: 17px 17px;

  &:hover {
    transform: scale(1.15);
  }

}

.cart-item>img {
  width: 100%;
  border-radius: 20px;
}

.buy-btn  {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  margin-top: -2px;
}
.buy-btn::after {
  content: '';
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  transform: translate3d(-525%, 0, 0) rotate(35deg);
}

.buy-btn:hover::after {
  transition: transform 0.45s ease-in-out;
  transform: translate3d(200%, 0, 0) rotate(35deg);
}
.buy-btn:focus {
  outline: none;
}
// .buy-btn:hover {
//   border: 3px solid #694dc6;
//   background-color: #694dc61f;
// }

.purple-color {
  background-color: #557bb6;
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
  font-size: 21px;
  font-weight: 500;

}
#price>img {
  height: 25px;
  width: 25px;
  margin-top: -4px;
 
 
}

#bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 5% 5% 5%;
}


</style>