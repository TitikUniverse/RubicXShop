<template>
  <section id="shop">
    <div class="menu">
      <LeftMenu />
    </div>

 
    <div class="center">
      <div class="header">
        <div class="find-container">
          <input type="text" placeholder="Поиск" />
          <button class="main-btn purple-color">
            <span class="material-icons-outlined md-36 md-light">search</span>
          </button>
        </div>
      </div>

      <div class="content">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
            <button class="main-btn" href=""><span class="material-icons-outlined md-42 md-light">local_mall</span></button>
          </div>
          
          <div class="profile">
            <img src="https://cdn1.flamp.ru/7d4a6fc3523af62949288789f52b7537.jpg" alt="">
            <div class="profile-info">
              <span class="name">Семен</span>
              <span class="balance">Баланс</span></div>
          </div>
        </div>

        <div class="description">
          
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
  border-right: 2px solid rgba(255, 255, 255, 0.513);
  

  height: 100vh;
  position: fixed;
}


.center {
  width: 70%;
  padding: 0px 0px;
  border-right: 2px solid rgba(255, 255, 255, 0.513);

  position: relative;
  left: 6%;
   

  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  height: 10vh;
  padding: 0px 50px;
  min-height: 80px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.513);

  display: flex;
  flex-direction: column;
  justify-content: center;
 
}

.bordertop {
border-top: 2px solid rgba(255, 255, 255, 0.513);


 
}

.content {
  width: 100%;
  height: 90%;
  min-height: 500px;
  padding: 30px 50px;  
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
.find-container input:focus {
  border: none;
  outline: none;
}
.main-btn {
  border: none;
  /* padding: 5px 5px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  

  width: 48px;
  height: 42px;
}
.main-btn:focus {
  outline: none;
}

/* Cards */
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.cards-item {
  display: flex;
  padding: 1rem;

  @media (min-width: 40rem) {
    width: 50%;
  }
  @media(min-width: 56rem) {
    width: 33.3333%;
  }
}
.card {
  background-color: rgba(255, 255, 255, 0.379);
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    .card-image {
      filter: contrast(100%);
    }
  }
}
.card-image {
  filter: contrast(70%);
  //filter: saturate(180%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);;
  &::before {
    content: "";
	  display: block;
    padding-top: 56.25%; // 16:9 aspect ratio
  }
  @media(min-width: 40rem) {
    &::before {
      padding-top: 66.6%; // 3:2 aspect ratio
    }
  }
}
.card-content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}
/* End cards */

.purple-color {
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
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.513)
}
.profile>img {
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 15px;
}
.profile>.profile-info {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}
.basket {
  width: 50px;
  height: 50px;
  border-radius: 15px;
  
}
.basket>button{
  width: 50px;
  height: 50px;
  border-radius: 15px;
  padding: 0px 0px 0px 0px;
  background-color: #694dc6;
}

.description {
  width: 100%;
  height: 90vh;
}

.name {
  font-size: 16px;
  font-weight: bold;
}

.balance {
  font-size: 14px;
  font-weight: lighter;
}

.profile {
  display: flex;
  flex-direction: row;
  padding-top: 15px;
}


</style>
