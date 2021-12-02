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
  padding: 30px 100px;

  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  height: 10vh;
  min-height: 80px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.513);

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content {
  width: 100%;
  height: 90%;
  min-height: 500px;
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
  border-radius: 5px;

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
</style>
