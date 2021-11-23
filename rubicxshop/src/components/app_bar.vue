<template>
  <div class="bar">
  <a class="active" href="#logo"><img src="" alt="LOGO"></a>
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
.bar a {
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

</style>