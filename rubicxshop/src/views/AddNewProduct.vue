<template>
  <section id="add">
    <div class="menu">
      <LeftMenu />
    </div>
    <div class="center">
      <div class="header">
        <div class="find-container">
          <input type="text" placeholder="Добавить название товара" />
        </div>
      </div> 
      <div class="header">
        <div class="find-container">
          <input type="text" placeholder="Добавить изображение товара" />
        </div>
      </div> 
      <div class="header">
        <div class="find-container">
          <input type="text" placeholder="Добавить описание товара" />
        </div>
      </div> 
      <div class="header">
        <div class="find-container">
          <input type="text" placeholder="Добавить название товара" />
        </div>
      </div>
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
    width: 23%;
  }
  @media only screen and (max-device-width: 479px) {
    width: 37%;
  }
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

</style>