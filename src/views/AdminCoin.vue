<template>
<section id="admincoin">
    <div class="menu">
      <LeftMenu />
    </div>



<div class="container">
  <h1>Выдача коинов</h1>
  <span>Номер группы:</span>
  <div class="dropdown">
    <select name="one" class="dropdown-select">
      <option value="">Выбрать</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>

  <div class="text_coin">
      <span>Time Coin</span>
      <span>Help Coin</span>
      <span>Flash Coin</span>
      <span>Bonus Coin</span>
      <span>Like Coin</span>
      <span>Fest Coin</span>
      <span>RubiCoin</span>
    </div>

  <div class="addition-coins">
    <div class="student-info">
      

      <CoinInputTemplate/>
      <CoinInputTemplate/>
      <CoinInputTemplate/>
      <CoinInputTemplate/>
      <CoinInputTemplate/>
      <CoinInputTemplate/>
      <CoinInputTemplate/>
      <CoinInputTemplate/>
      <CoinInputTemplate/>
      <CoinInputTemplate/>
      <CoinInputTemplate/>
      <CoinInputTemplate/>
      <CoinInputTemplate/>
      <CoinInputTemplate/>
      <CoinInputTemplate/>

    </div>
    <Burger />
    <div class="scroll"></div>
  </div>


    <!-- Сохранение коинов
    <div class="add">
      <button>Сохранить</button>
    </div> -->
 
 <!-- <div class="find-container">
        <input type="text" placeholder="Кол-во" />
        
  </div>
 
  <div class="buy-btn">
    <button id="buy-btn" class="main-btn orange-color">Добавить</button>
  </div> -->

  
</div>


</section>
</template>

<script>
import LeftMenu from "../components/LeftMenu.vue";
import CoinInputTemplate from "../components/CoinInputTemplate.vue"
import Burger from "../components/Burger.vue";

function a() {

var Ctime = 0;
var Chelp = 0;
var Cflash = 0;
var Cbonus = 0;
var Clike = 0;
var Cfest = 0;
var Crubi = 0;

document.getElementById("time").innerHTML=Ctime;
document.getElementById("help").innerHTML=Chelp;
document.getElementById("flash").innerHTML=Cflash;
document.getElementById("bonus").innerHTML=Cbonus;
document.getElementById("like").innerHTML=Clike;
document.getElementById("fest").innerHTML=Cfest;
document.getElementById("rubi").innerHTML=Crubi;
}


export default {
components: {
    LeftMenu,
    CoinInputTemplate,
    Burger
  },
}
</script>

<style lang="scss" scoped>
#admincoin {
  color: white;
  background: linear-gradient(rgb(1, 165, 138), rgb(13, 84, 165));
  overflow: hidden;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  @media only screen and (max-device-width: 480px) {
  width: 100%;
  }
  
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

.addition-coins {
  position: relative;
  overflow: hidden;
  margin-top: 50px;
  left : 170px;
  margin: 0 5px;

@media only screen and (max-device-width: 480px) {
    margin-left: -23%;
  }

}
.student-info{
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: row;

  margin-bottom: 15px;
  justify-content: space-evenly;
}
.student-name{
  height: 30px;
  font-size: 15px;
}

.addition{
  width: 100%;
  height: 50px;
}


.add{
  width: 60%;
  font-size: 25px;
  background: linear-gradient(Tomato, OrangeRed);
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}


.add > button{
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 5px;
  outline: none;
  border: none;
  background-color: #b14d2f;
  overflow: hidden;
  border-radius: 50px;
  margin-top: -290px;
  margin-right: -210px;
}


body {
  font: 13px/20px "Lucida Grande", Tahoma, Verdana, sans-serif;
  color: #404040;
  background: #93cedf;
}

.container {
  margin: 40px auto;
  text-align: center;
  align-items: center;
  max-width: 90%;
}

.dropdown {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 10px auto;
  vertical-align: top;
  // height: 28px;
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
  @media only screen and (max-device-width: 480px) {
    width: 70%;
  }
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
  @media only screen and (max-device-width: 480px) {
  width: 49%;
  }
}

.dropdown-dark:before {
  border-bottom-color: #aaa;
}

.dropdown-dark:after {
  border-top-color: #aaa;
}

.dropdown-dark .dropdown-select {
  color: #ffffff;
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
  margin: 37px;
}

.groop>p {
  margin-right: 375px;
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
  @media only screen and (max-device-width: 480px) {
  margin-left: 85px;
  }

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
  background-color: #00a48a;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 9px;
  align-items: center;
  margin-right: 13px;
}

.buy-btn:focus {
  outline: none;
  border-style: none;
  
}
// .buy-btn:hover {
//   border: 3px solid #694dc6;
//   background-color: #694dc61f;
// }

.scroll {
    height: 30px;
}

::-webkit-scrollbar {
    width: 15px;
}

::-webkit-scrollbar-track {
    background: #d4d4d4;
    box-shadow: 0 0 2px rgba(0, 0, 0, .2) inset;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb {
    background: #939393;
    border-radius: 8px;
    border: 3px solid #d4d4d4;
}

::-webkit-scrollbar-thumb:hover {
    background: #7c7c7c;
}


.text_coin{
  position: absolute;
  height: 300px;
  display: flex;
  flex-direction: column;
  left: 120px;
  top: 300px;
  justify-content: space-between;

  @media only screen and (max-device-width: 480px) {
    margin-left: -26%;
  }
}
</style>
