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
        <div class="save">
          <button id="cancel-btn" class="main-btn red-color">Отменить</button>
          <button id="save-btn" class="main-btn green-color">Сохранить</button>

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
  padding: 20px 21px;

  display: flex;
  flex-direction: column;

  @media only screen and (min-device-width: 480px) {
    position: relative;
    left: 6%;
    width: 70%;
  }
  @media only screen and (max-device-width: 479px) {
    width: 100%;
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
#save-btn:hover {
  background-color: #7feb4d;
  border: 2px solid white;
}
.save{
  display: flex;
  justify-content: center ;
  
}
#cancel-btn {
  margin-right: 15px;
}
#cancel-btn:hover {
  background-color: #fb5555;
  border: 2px solid white;
}

.main-btn {
  border: none;
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  border: 2px solid transparent;

  transition: all 0.2s;
}
.main-btn:focus {
  outline: none;
}

</style>