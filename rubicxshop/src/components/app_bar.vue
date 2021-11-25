<template>
  <div class="bar">
    <a class="active" href="#logo"><img src="" alt=""></a>
    
    
    <div class="profile">
      <router-link to="/productshoplist">
      <img src='../assets/Profile.svg' width="50" height="50">
      </router-link>
    </div>

    <div class="basket">
      <router-link to="/">
      <img src ='../assets/shop.svg' width="50" height="50">
      </router-link>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bar {
    position: relative;
    height: 50px;
    background-color: #333;
    overflow: hidden;
}

/* Style the links inside the navigation bar */
.bar>a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
.bar a:hover {
    background-color: #ddd;
    color: black;
}

.profile{

  float: right;
    margin-left: 1%;
}

.basket{
  float: right;   
}
</style>