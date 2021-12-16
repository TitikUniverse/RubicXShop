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
            <span id="age">23 годика</span>
            <span id="groupnumber">Номер группы: 212019</span>
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
html{
  overflow-x: hidden;
}

#logo>img{
  width:250px;
  border-radius: 200px;
  padding: 10px 10px;

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
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, Impact;
 font-weight: bold;

}
#logo>.description>#name{
  font-size: 50px;
  padding-left: 10px;
}
#logo>.description>#age{
  opacity: 88%;
  font-size: 22px;
  padding-left: 15px;
  
}
#logo>.description>#groupnumber{
  opacity: 88%;
  font-size: 22px;
  padding-left: 15px;
}
.second-row{
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  padding: 30px 10px 10px;
}

.content{
  display: flex;
  flex-direction: column;
  padding: 0px 33%;
  margin-top: 50px;
}
table{
  font-family: sans-serif;
  border-collapse: separate;
  border-spacing: 5px;
  color: rgb(255, 255, 255);
  border-radius: 20px;
  

}
th{
  font-size: 18px;
  padding: 10px;

}
td{
  background: rgb(139, 0, 255);
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
}

</style>
