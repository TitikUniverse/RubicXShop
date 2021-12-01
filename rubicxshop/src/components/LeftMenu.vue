<template>
  <div class="main">
    <div class="icon-container">
        <button class="main-btn"><span class="material-icons-outlined md-42 md-light">home</span></button>
        <button class="main-btn"><span class="material-icons-outlined md-42 md-light">email</span></button>
        <button class="main-btn"><span class="material-icons-outlined md-42 md-light">import_contacts</span></button>
        <button class="main-btn"><span class="material-icons-outlined md-42 md-light">local_mall</span></button>
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
</style>
