<template>
  <section id="orders">
    <div class="menu">
      <LeftMenu />
    </div>

      <div class="center">
        <div class="find-container">
          <img data-v-ea19b9a0="" src="https://avatars.mds.yandex.net/i?id=56933482d1f5e49b2df48e511b1fecc6-5558158-images-thumbs&amp;n=13" alt="">
          <orders v-for="item in productDataTest" :key="item.name" :productData=item />
        </div>
        <div class="header">
         
          </div>
        </div> 

      

  </section>
</template>

<script>
import order from '@/components/order.vue'
import LeftMenu from "../components/LeftMenu.vue";
export default {
  name: 'orders',
  components:{
    order,
    LeftMenu
  }
}
</script>

<style lang="scss" scoped>
#orders {
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
    
    position: relative;
    left: 25%;
    width: 50%;
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
  height: 17%;
  background-color: rgba(255, 255, 255, 0.379);
  padding: 10px 15px;
  border-radius: 15px;
  margin-top: 179px;
  
 
}

.find-container input{
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
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
.find-container>img{
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-left: 11px;
}
</style>

