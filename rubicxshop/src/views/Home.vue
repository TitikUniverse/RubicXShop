<template>
  <section id="home">
    <div class="menu">
      <LeftMenu />
    </div>

    <div class="content">
      <div class="row justify-content-around">
        <div class="col-7">
          <div class="row first-row">
            <div class="find-container">
              <input type="text">
              <button class="main-btn purple-color"><span class="material-icons-outlined md-36 md-light">search</span></button>
            </div>
          </div>
        </div>
        <div class="col-4">
            <div class="row first-row">
            </div>
        </div>
      </div>
    </div>

    <div class="right-side">
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

<style scoped>
#home {
  height: 100%;
  background: url("../assets/bg.webp");

  display: flex;
  flex-direction: row;
}
.menu {
  width: 6%;
  height: 100%;
  border-right: 2px solid rgba(255, 255, 255, 0.513);
}
.content {
  width: 65%;
  padding: 30px 100px;
  border-right: 2px solid rgba(255, 255, 255, 0.513);
}
.right-side {
  width: 29%;
  padding: 30px 40px;
}

.first-row {
  height: 70px;
}
.first-row .find-container {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.379);
  border-radius: 15px;
  padding: 10px 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.main-btn {
  border: none;
  /* padding: 5px 5px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.purple-color {
  background-color: #694dc6;
}
</style>