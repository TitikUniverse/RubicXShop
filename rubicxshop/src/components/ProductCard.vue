<template>
  <!-- <ul class="cards">
    <li class="cards-item">
      <div class="card">
        <img src="https://i.imgur.com/3kRgbVi.jpg" alt="" class="card-image">
        <div class="card-content">
          <div class="сard-title">Название этого товара</div>
        </div>
      </div>
    </li>
  </ul> -->
  <div class='v-cart-item'>
    <img src="" alt="img">
    <p>Item 1</p>
    <p>Price: 100</p>
    <button>Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props:{
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data(){
    return{}
  },
  computed:{}
}
</script>

<style lang="scss" scoped>

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

  .v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding:16px;
    margin-bottom: 16px;
    width: 291px;
    height: 191px;
    float: left;

  }


</style>