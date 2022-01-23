<template>
  <section id="main">
    <div class="menu">
      <LeftMenu />
    </div>
    <div class="center">
      <h1>Список заявок</h1>
      <OrderCard v-for="item in productDataTest" :key="item.name" :productData="item"  />
    </div> 
  </section>
</template>

<script>
import OrderCard from '../components/ApplicationCard.vue';
import LeftMenu from "../components/LeftMenu.vue";

export default {
  name: 'orders',
  components: {
    OrderCard,
    LeftMenu,
  },
  data() {
    return {
      productDataTest: [
        {},
        {},
        {},
        {},
       
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
#main {
  color: white;
  background: linear-gradient(rgb(1, 165, 138), rgb(13, 84, 165));
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
  margin-top: 50px;
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

.center>h1 {
  text-align: center;
}
</style>

