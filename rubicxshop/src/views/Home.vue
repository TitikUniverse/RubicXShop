<template>
  <div id="home">
      <div class="menu">
        <LeftMenu />
      </div>
  </div>
</template>

<script>
import LeftMenu from '../components/LeftMenu.vue'

export default {
    components: {
        LeftMenu
    }
}
</script>

<style scoped>
#home {
    height: 100%;
}
.menu {
    width: 10%;
    height: 100%;
}
</style>