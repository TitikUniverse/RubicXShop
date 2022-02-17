<template>
  <div class="main">
    <div class="icon-container">
        <router-link to="/profile"><button class="main-btn" href=""><span class="material-icons-outlined md-42 md-light">account_circle</span></button></router-link>
        <button class="main-btn" href=""><span class="material-icons-outlined md-42 md-light">email</span></button>
        <button class="main-btn" href=""><span class="material-icons-outlined md-42 md-light">import_contacts</span></button>
        <router-link to="/shop"><button class="main-btn" href=""><span class="material-icons-outlined md-42 md-light">local_mall</span></button></router-link>
       <div class="r-icon">
       <img src="https://media.discordapp.net/attachments/528856767199969280/931705208537489418/-2.png?width=566&height=566" alt="">
       </div>
     </div>
</div>
  
  
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center; /* Выравнивание по горизонтали */
    align-items: center; /* Выравнивание по вертикали */
}
.icon-container {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center; /* Выравнивание по горизонтали */
}

.main-btn {
  outline:none;
  background-color: transparent;
  border: none;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  
  
}



.r-icon>img {
  width: 90px;
  height: 90px;
  margin-top: -918px;
}
</style>
