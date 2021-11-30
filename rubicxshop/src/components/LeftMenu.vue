<template>
  <div class="main">
    <div class="icon-container">
        <span class="material-icons">home</span>
        <span class="material-icons">email</span>
        <span class="material-icons">import_contacts</span>
        <span class="material-icons">local_mall</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 36px;  /* Preferred icon size. Last value 24px */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

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
</style>