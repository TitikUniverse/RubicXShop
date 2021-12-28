<template>
  <section id="shop">
    <div class="menu">
      <LeftMenu />
    </div>
 
    <div class="center">
      <div class="header">
        <div class="find-container">
          <input type="text" placeholder="Поиск" />
          <button id="find-btn" class="main-btn purple-color">
            <div class="material-icons-outlined md-36 md-light">search</div>
          </button>
        </div>
      </div> 

      <div class="content">
        <ProductCard v-for="item in productDataTest" :key="item.name" :productData=item />
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-7">
        <div class="analytics"></div>
      </div>
      <div class="col-5">
        <div class="progress"></div>
      </div>
    </div> -->

     <div class="right-side">
        <div class="profile-in-header">
          <div class="basket">
            <router-link to="/orders">
            <button class="main-btn purple-color" href=""><span class="material-icons-outlined md-36 md-light">local_mall</span></button>
            </router-link>
          </div>
          <router-link to="/profile" tag="div">
          <div class="profile">
            <img src="https://avatars.mds.yandex.net/i?id=56933482d1f5e49b2df48e511b1fecc6-5558158-images-thumbs&n=13" alt="">
            <div class="profile-info">
              <span class="name">Семён</span>
              <span class="balance">Баланс: 100 R</span></div>
          </div>
          </router-link>
        </div>

        <div class="selected-product">
          <img id="image" src="https://cdn1.ozone.ru/s3/multimedia-h/6044086553.jpg" alt="">
          <div class="selected-product-item">
            <div id="price" class="orange-color">
              <span>100 R</span>
              <!-- <img id="image" src="https://pngimage.net/wp-content/uploads/2018/06/r-logo-png-4.png" alt=""> -->
            </div>
            <span id="name">Коврик для мышки</span>
            <span id="description">Самый лучший коврик для мышки. Очень мягкий и шелковистый</span>
            <button id="buy-btn" class="main-btn orange-color">Купить</button>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import LeftMenu from "../components/LeftMenu.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    LeftMenu,
    ProductCard
  },
  data() {
    return {
      productDataTest: [
        { name: "Мышка", imageUrl: "https://yt3.ggpht.com/a/AGF-l79qNv-LqiuIhbkJ7trtdWLdAebjaJSGtJgSwA=s900-c-k-c0xffffffff-no-rj-mo", price: 100 },
        { name: "Коврик", imageUrl: "https://yt3.ggpht.com/a/AGF-l79qNv-LqiuIhbkJ7trtdWLdAebjaJSGtJgSwA=s900-c-k-c0xffffffff-no-rj-mo", price: 250 },
        { name: "Ручка", imageUrl: "https://yt3.ggpht.com/a/AGF-l79qNv-LqiuIhbkJ7trtdWLdAebjaJSGtJgSwA=s900-c-k-c0xffffffff-no-rj-mo", price: 50 },
        { name: "Ластик", imageUrl: "https://yt3.ggpht.com/a/AGF-l79qNv-LqiuIhbkJ7trtdWLdAebjaJSGtJgSwA=s900-c-k-c0xffffffff-no-rj-mo", price: 300 },
        { name: "Браслет", imageUrl: "https://yt3.ggpht.com/a/AGF-l79qNv-LqiuIhbkJ7trtdWLdAebjaJSGtJgSwA=s900-c-k-c0xffffffff-no-rj-mo", price: 500 },
        { name: "Кружка", imageUrl: "https://yt3.ggpht.com/a/AGF-l79qNv-LqiuIhbkJ7trtdWLdAebjaJSGtJgSwA=s900-c-k-c0xffffffff-no-rj-mo", price: 240 },
        { name: "Повербанк", imageUrl: "https://yt3.ggpht.com/a/AGF-l79qNv-LqiuIhbkJ7trtdWLdAebjaJSGtJgSwA=s900-c-k-c0xffffffff-no-rj-mo", price: 10 },
        { name: "Худи", imageUrl: "https://yt3.ggpht.com/a/AGF-l79qNv-LqiuIhbkJ7trtdWLdAebjaJSGtJgSwA=s900-c-k-c0xffffffff-no-rj-mo", price: 700 },
        { name: "Футболка", imageUrl: "https://yt3.ggpht.com/a/AGF-l79qNv-LqiuIhbkJ7trtdWLdAebjaJSGtJgSwA=s900-c-k-c0xffffffff-no-rj-mo", price: 320 },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
#shop {
  color: white;
  background: url("../assets/bg.webp");

  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.menu {
  width: 6%;
  height: 100vh;
  position: fixed;
  border-right: 2px solid rgba(255, 255, 255, 0.513);

  @media only screen and (max-device-width: 480px) {
    display: none;
  }
}


.center {
  padding: 0px 0px;

  display: flex;
  flex-direction: column;

  @media only screen and (min-device-width: 480px) {
    border-right: 2px solid rgba(255, 255, 255, 0.513);
    position: relative;
    left: 6%;
    width: 70%;
  }
  @media only screen and (max-device-width: 479px) {
    width: 100%;
  }
}

.header {
  width: 100%;
  height: 10vh;
  padding: 0px 50px;
  min-height: 80px;
  // border-bottom: 2px solid rgba(255, 255, 255, 0.513);

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-device-width: 479px) {

    padding: 0px 10px 0 80px  ;
  }
}



.content {
  width: 100%;
  height: 90%;
  min-height: 500px;
  padding: 20px 0px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  
}

.find-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  background-color: rgba(255, 255, 255, 0.379);
  padding: 10px 15px;
  border-radius: 15px;
  

}

.find-container input{
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  font-weight: 500;

  
}
.find-container input::placeholder {
  color: white;
}
.find-container input:focus {
  border: none;
  outline: none;
}
.find-container #find-btn {
  width: 45px;
  height: 42px;
}
.main-btn  {
  border: none;
  /* padding: 5px 5px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;

  transition: all 0.2s;
}
.main-btn:focus {
  outline: none;
}

.purple-color  {
  background-color: #694dc6;
}
.orange-color {
  background-color: #694dc6;
}

.right-side {
  width: 24%;
  padding: 0px 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  position: fixed;
  right: 0px;

  @media only screen and (max-device-width: 480px) {
    display: none;
  }
}

.right-side .user-info {
  width: 100%;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-info>img {
  width: 150px;
  height: 150px;
  border-radius: 500px;
  margin-bottom: 25px;
}

.user-info>span {
  font-size: 24px;
  font-weight: bold;
}
.right-side .title {
  width: 100%;
  height: 50px;
  
}

.right-side .event-item-container {
  width: 100%;
}
.right-side .event-item {
  width: 100%;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.379);
  border-radius: 15px;
  margin-bottom: 20px;
}

.right-side .notify-item-container {
  width: 100%;
}

.right-side .notify-item {
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.379);
  border-radius: 15px;
}

.profile-in-header {
  width: 100%;
  height: 10vh;
  min-height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // border-bottom: 2px solid rgba(255, 255, 255, 0.513)
}

.profile-in-header .basket {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  margin-right: 25px;
}

.profile-in-header .profile {
  display: flex;
  flex-direction: row;
  cursor: pointer;
}
.profile>img {
  width: 45px;
  height: 42px;
  border-radius: 10px;
}
.profile>.profile-info {
  display: flex;
  flex-direction: column;
  padding-left: 15px;
}
.profile-info .name {
  font-size: 16px;
  font-weight: bold;
  
}

.profile-info .balance {
  font-size: 14px;
  font-weight: lighter;
}

.selected-product {
  width: 100%;
  // min-width: 300px;
  height: 90vh;
  min-height: 500px;

  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
}

.selected-product>img {
  width: 85%;
  margin-top: 30px;
  min-height: 150px;
  max-height: 300px;
  border-radius: 15px;
  object-fit: cover;
}
.selected-product-item {
  width: 85%;
  margin-top: 25px;

  display: flex;
  flex-direction: column;
}
.selected-product-item #price {
  text-align: center;
  font-weight: 650;
  font-size: 18px;
  padding: 5px;
  width: 30%;
  border-radius: 10px;
}
.selected-product-item #name {
  text-align: left;
  word-wrap: break-word;
  font-weight: 650;
  font-size: 18px;
  margin-top: 15px;
}
.selected-product-item #description {
  text-align: left;
  word-wrap: break-word;
  font-weight: 300;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.808);

  margin-top: 15px;
}
.selected-product-item #buy-btn {
  padding: 10px;
  margin-top: 15px;
  border: 2px solid transparent;
  color: white;
}
.selected-product-item #buy-btn:hover {
  background-color: #eb6f4d28;
  border: 2px solid #694dc6;
}
#price>img {
  height: 20px;
  width: 20px;
  margin-top: -3px;
  margin-left: 3px;
}


</style>
