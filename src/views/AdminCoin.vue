<template>
<section id="admincoin">
    <div class="menu">
      <LeftMenu />
    </div>



<div class="container">
  <h1>Выдача коинов</h1>
  <p>Студент:</p>
  <div class="dropdown">
    <select name="one" class="dropdown-select">
      <option value="">Выбрать</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>
  <div class="groop">
    <p>Номер группы:</p>
  </div>
  <div class="dropdown dropdown-dark">
    <select name="two" class="dropdown-select">
      <option value="">Выбрать</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>
 
 <div class="find-container">
        <input type="text" placeholder="Кол-во" />
        
  </div>
 
  <div class="buy-btn">
    <button id="buy-btn" class="main-btn orange-color">Добавить</button>
  </div>

  
</div>


</section>
</template>

<script>
import LeftMenu from "../components/LeftMenu.vue";

export default {
components: {
    LeftMenu,
  },
}
</script>

<style lang="scss" scoped>
#admincoin {
  color: white;
 background: linear-gradient(rgb(1, 165, 138), rgb(13, 84, 165));
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  
}

.menu {
  width: 6%;
  height: 100vh;
  position: fixed;
  border-right: 2px solid rgba(255, 255, 255, 0.513);

  @media only screen and (max-device-width: 480px) {
    display: none;
  }
}


body {
  font: 13px/20px "Lucida Grande", Tahoma, Verdana, sans-serif;
  color: #404040;
  background: #93cedf;
}

.container {
  margin: 80px auto;
  width: 553px;
  text-align: center;
  align-items: center;
  
}

.container > .dropdown {
  margin: 0 20px;
  vertical-align: top;
  margin: 41px;
  margin-left: 41px;
}

.dropdown {
  display: flex;
  position: relative;
  overflow: hidden;
  height: 28px;
  width: 443px;
  background: #f2f2f2;
  border: 1px solid;
  border-color: white #f7f7f7 whitesmoke;
  border-radius: 3px;
  background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
  background-image: -moz-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
  background-image: -o-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.06));
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  
}

.dropdown:before, .dropdown:after {
  content: '';
  position: absolute;
  z-index: 2;
  top: 9px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px dashed;
  border-color: #888888 transparent;
  pointer-events: none;
}

.dropdown:before {
  border-bottom-style: solid;
  border-top: none;
}

.dropdown:after {
  margin-top: 7px;
  border-top-style: solid;
  border-bottom: none;
}

.dropdown-select {
  position: relative;
  width: 71px;
  margin: 0;
  padding: 6px 8px 6px 10px;
  height: 28px;
  line-height: 14px;
  font-size: 12px;
  color: #62717a;
  text-shadow: 0 1px white;
  background: #f2f2f2; /* Fallback for IE 8 */
  background: rgba(0, 0, 0, 0) !important; /* "transparent" doesn't work with Opera */
  border: 0;
  border-radius: 0;
  -webkit-appearance: none;
}

.dropdown-select:focus {
  z-index: 3;
  width: 100%;
  color: #394349;
  outline: 2px solid #49aff2;
  outline: 2px solid -webkit-focus-ring-color;
  outline-offset: -2px;
}

.dropdown-select > option {
  margin: 3px;
  padding: 6px 8px;
  text-shadow: none;
  background: #62717a;
  border-radius: 3px;
  cursor: pointer;
}

/* Fix for IE 8 putting the arrows behind the select element. */

.lt-ie9 .dropdown {
  z-index: 1;
}

.lt-ie9 .dropdown-select {
  z-index: -1;
}

.lt-ie9 .dropdown-select:focus {
  z-index: 3;
}

/* Dirty fix for Firefox adding padding where it shouldn't. */

@-moz-document url-prefix() {
  .dropdown-select {
    padding-left: 6px;
  }
}

.dropdown-dark {
   display: flex;
  position: relative;
  overflow: hidden;
  height: 28px;
  width: 443px;
  background: #f2f2f2;
  border: 1px solid;
  border-color: white #f7f7f7 whitesmoke;
  border-radius: 3px;
  background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
  background-image: -moz-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
  background-image: -o-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.06));
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
}

.dropdown-dark:before {
  border-bottom-color: #aaa;
}

.dropdown-dark:after {
  border-top-color: #aaa;
}

.dropdown-dark .dropdown-select {
  color: #84888b;
  text-shadow: 0 1px black;
  background: #444;  /* Fallback for IE 8 */
   color: #62717a;
  text-shadow: 0 1px white;
  background: #f2f2f2; /* Fallback for IE 8 */
  background: rgba(0, 0, 0, 0) !important; /* "transparent" doesn't work with Opera */
}

.dropdown-dark .dropdown-select:focus {
  color: #ccc;
}

.dropdown-dark .dropdown-select > option {
  background: #444;
  text-shadow: 0 1px rgba(0, 0, 0, 0.4);
}

.container>h1 {
  text-align: center;
  margin: 37px
}

.container>p {
  margin-right: 372px;
  margin-bottom: -35px;
}

.groop>p {
  margin-right: 325px;
  margin-bottom: -35px;
}

.find-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5%;
  background-color: rgba(255, 255, 255, 0.379);
  padding: 10px 15px;
  border-radius: 6px;
  width: 110px;
  margin-left: 199px;
  margin-top: -15px;

}

.find-container input{
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 15px;
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  font-weight: 500;
  text-align: center;

  
}
.find-container input::placeholder {
  color: white;
}
.find-container input:focus {
  border: none;
  outline: none;
}
.buy-btn>button  {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #fa8100;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 9px;
  align-items: center;
  margin-right: 13px;
}

.buy-btn:focus {
  outline: none;
}
// .buy-btn:hover {
//   border: 3px solid #694dc6;
//   background-color: #694dc61f;
// }
</style>
