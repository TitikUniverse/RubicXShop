<template>
<section id="home">
<div class="menu">
<LeftMenu />
</div>
  <div class="content">
    <div class="first-row">
        <div id="logo">
          <img src="https://cdn1.flamp.ru/7d4a6fc3523af62949288789f52b7537.jpg" alt="">  
          <div class="description">
            <span id="name">Титов Семён</span>
            <span>23 годика</span>
            <span>Номер группы: 212019</span>
          </div>
        </div>
    </div>
    <div class="second-row">
        <table>
          <tr>  
            <th>HelpCoin</th>
            <th>FlashCoin</th>
            <th>BonusCoin</th>
            <th>LikeCoin</th>
            <th>FestCoin</th>
            <th>RubicCoin</th>
          </tr>
          <tr>
            <td>30</td>
            <td>23</td>
            <td>40</td>
            <td>5</td>
            <td>32</td>
            <td>1</td>
        </tr>
    </table>
    </div>
  </div>
  </section>
</template>

<script>
import LeftMenu from "../components/LeftMenu.vue";

export default {
  components: {
    LeftMenu
   
  }
}
</script>

<style>
#home{
  color: white;
  background: url("../assets/bg.webp");

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

#logo>img{
  width:200px;
}
#logo{
  display: flex;
  flex-direction: row;
  justify-content: center;
  

}
#logo>.description{
 display: flex;
 flex-direction: column;
 padding: 40px 0px;
}
.second-row{
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  padding: 10px 10px 10px;
}

.content{
  display: flex;
 flex-direction: column;
 padding: 0px 20%;
 margin-top: 50px;
}

</style>
