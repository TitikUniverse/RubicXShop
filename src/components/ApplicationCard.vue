<template>
  <div class="container">
    <img id="product-image" src="https://yt3.ggpht.com/a/AGF-l79qNv-LqiuIhbkJ7trtdWLdAebjaJSGtJgSwA=s900-c-k-c0xffffffff-no-rj-mo" alt=""> 
    <span class="membername">Имя Фамилия</span>
  <button class="accept">  <span class="material-icons">done</span></button>
    <button class="decline"><span class="material-icons">close</span></button>
  </div>
</template>

<script>
</script>

<style  lang="scss"scoped>
.accept{
   background: none;
    outline: none;
    margin-right: -50px;
    color: white; 
    border: none;
    
}

.decline{
    background: none;
    outline: none;
    border: none;
    color: white;
}
.membername{
    font-weight: 500;
    font-size: 25px;
    margin-right: 500px;
}
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