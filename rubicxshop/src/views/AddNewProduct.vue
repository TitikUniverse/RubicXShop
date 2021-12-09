<template>
  <section id="add">
    <div class="menu">
      <LeftMenu />
    </div>
    <div class="center">
      <input placeholder="Добавить товар" />
    </div>

    
  </section>
</template>

<script>
import LeftMenu from '../components/LeftMenu.vue'

export default {
  components: {
    LeftMenu
  }
}
</script>

<style lang="scss" scoped>
#add {
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
  padding: 20px 21px;

  display: flex;
  flex-direction: column;

  @media only screen and (min-device-width: 480px) {
    position: relative;
    left: 6%;
    width: 13%;
  }
  @media only screen and (max-device-width: 479px) {
    width: 27%;
  }
}
</style>