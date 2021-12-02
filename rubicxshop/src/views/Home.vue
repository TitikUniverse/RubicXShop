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
              <input type="text" placeholder="Поиск">
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
              <div class="hello-container">
                <span class="greetings">Привет, {{name}}</span>
                <span class="description">1010101000100111010010100100101001010100111010101001010101010010101010101</span>
              </div>
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
          <div class="achievements-item">
            <img src="https://i.imgur.com/3kRgbVi.jpg" alt="">
            <div class="text-item">
              <div class="text-item">
                <span>11123213211233</span>
              </div>
              <div class="text-item">
                <span>11123123131312</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="achievements-item">
            <img src="https://i.imgur.com/3kRgbVi.jpg" alt="">
            <div class="text-item">
              <div class="text-item">
                <span>11123213211233</span>
              </div>
              <div class="text-item">
                <span>11123123131312</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="achievements-item">
            <img src="https://i.imgur.com/3kRgbVi.jpg" alt="">
            <div class="text-item">
              <div class="text-item">
                <span>11123213211233</span>
              </div>
              <div class="text-item">
                <span>11123123131312</span>
              </div>
            </div>
          </div>
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
        <div class="user-info">
          <img src="https://i.imgur.com/3kRgbVi.jpg" alt="">
          <span>Титов Семён</span>
        </div>

        <div class="title">
          <span>Новые ивенты</span>
        </div>

        <div class="event-item-container">
          <div class="event-item">
            
          </div>
        </div>
          <div class="event-item">
            
          </div>
        </div>

        <div class="title">
        </div>

        <div class="notify-item-container">
          <div class="notify-item">

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

<style scoped>
#home {
  color: white;
  background: url("../assets/bg.webp");

  display: flex;
  flex-direction: row;
  min-height: 100vh;
  /* align-items: stretch; */
}
.menu {
  width: 6%;
  border-right: 2px solid rgba(255, 255, 255, 0.513);
}
.content {
  width: 70%;
  padding: 30px 100px;
  border-right: 2px solid rgba(255, 255, 255, 0.513);

  display: flex;
  flex-direction: column;
  justify-content:space-between;
}
.right-side {
  width: 24%;
  padding: 30px 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

  display: flex;
  flex-direction: column;
  justify-content: end;
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
.second-row>div {
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
.find-container input {
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  border: none;
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
  display: flex;
  flex-direction: row;
  padding: 15px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.379);
  border-radius: 15px;
}

.achievements-item>img{
  border-radius: 10px;
}
.text-item{
  padding: 1px 6px;
  flex-direction: column;
}

.main-btn {
  border: none;
  /* padding: 5px 5px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
}

.main-btn:focus {
  outline: none;
}

.hello {
  padding: 20px;
}

.hello-container {
  display:flex;
  width: 70%;
  flex-direction: column;
  word-wrap: break-word;
  padding: 10px 0 0 50px;
}
.description{
  color: #C0C0C0;
  line-height: 18px;
  font-size: 13px;
  font-style: italic;
}

.greetings {
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
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
