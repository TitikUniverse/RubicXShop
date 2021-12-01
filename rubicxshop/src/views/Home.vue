<template>
  <section id="home">
    <div class="menu">
      <LeftMenu />
    </div>

    <div class="content">
      <div class="row justify-content-around">
        <div class="col-7">
          <div class="first-row">
            <div class="find-container">
              <input type="text">
              <button class="main-btn purple-color"><span class="material-icons-outlined md-36 md-light">search</span></button>
            </div>
          </div>
        </div>
        <div class="col-5">
            <div class="first-row">
            </div>
        </div>
      </div>

      <div class="row justify-content-around">
        <div class="col-7">
          <div class="second-row">
            <div class="hello">

            </div>
          </div>
        </div>
        <div class="col-5">
          <div class="row justify-content-between">
            <div class="col-6">
              <div class="second-row">
                <div class="schedule">

                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="second-row">
                <div class="schedule">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="achievements-title">
        <span>Достижения</span>
      </div>

      <div class="row">
        <div class="col-4">
          <div class="achievements-item"></div>
        </div>
        <div class="col-4">
          <div class="achievements-item"></div>
        </div>
        <div class="col-4">
          <div class="achievements-item"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-7">
          <div class="analytics"></div>
        </div>
        <div class="col-5">
          <div class="progress"></div>
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
  color: white;
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
  height: 70;
}
.first-row div {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.379);
  border-radius: 15px;
  padding: 10px 15px;
}
.second-row {
  height: 140px;
}
.second-row div {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.379);
  border-radius: 15px;
  padding: 10px 15px;
}
.first-row .find-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.second-row .hello {

}
.second-row .schedule {

}

.achievements-title {
  width: 100%;
  height: 70px;

  display: flex;
  align-items: end;
}
.achievements-title>span {
  font-size: 24px;
}

.achievements-item {
  height: 80px;
  background-color: rgba(255, 255, 255, 0.379);
  border-radius: 15px;
}

.main-btn {
  border: none;
  /* padding: 5px 5px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.analytics{
  height: 450px;
  background-color: rgba(255, 255, 255, 0.379);
  border-radius: 15px;
}

.progress{
  height: 450px;
  background-color: rgba(255, 255, 255, 0.379);
  border-radius: 15px;
}

.purple-color {
  background-color: #694dc6;
}
</style>
