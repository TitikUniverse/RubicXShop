<template>
  <div class="container">
    <img id="product-image" :src="productData.imageUrl" alt=""> <!-- https://cdn1.ozone.ru/s3/multimedia-h/6044086553.jpg -->
    <div id="title"><span>{{productData.name}}</span></div>
    <!-- <img id="status-image" src="https://i.gifer.com/7kRE.gif" alt=""> -->
    <span class="material-icons-outlined md-42 md-light">{{currentIcon}}</span>
  </div>
</template>

<script>
export default {
  name: "OrderCard",
  props: {
    productData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      completedImage: "",
      notCompletedImage: "https://i.gifer.com/7kRE.gif",
    }
  },
  computed: {
    currentIcon: function () {
      if (this.productData.completed == true) return 'done'
      return 'hourglass_empty'
    }
  }
}
</script>

<style  lang="scss"scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.379);
  padding: 10px 15px;
  border-radius: 15px;
  margin-bottom: 20px;

  @media only screen and (max-device-width: 480px) {
    width: 80%;
  }
}
.container #product-image {
    width: 60px;
    height: 60px;
    border-radius: 10px;
}
.container #title {
  font-weight: 700;
  word-wrap: break-word;
  width: 35%;
}
.container #status-image {
    width: 60px;
    height: 60px;
    border-radius: 10px;
}
</style>