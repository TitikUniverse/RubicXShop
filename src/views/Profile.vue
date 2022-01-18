<template>
  <section id="home">
    <div class="menu">
      <LeftMenu />
    </div>
    <div class="content">
      <div class="first-row">
        <div id="logo">
          <img
            src="https://cdn1.flamp.ru/7d4a6fc3523af62949288789f52b7537.jpg"
            alt=""
          />
          <div class="description">
            <span id="name">{{ currentuser.name }}</span>
            <span id="age">{{ currentuser.age }} годика</span>
            <span id="groupnumber"
              >Номер группы: {{ currentuser.groupnumber }}</span
            >
          </div>
        </div>
      </div>
      <div class="second-row" v-if="currentuser.role != 'admin'">
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
      <div class="admin-button second-row" v-else>
        <router-link tag="button" to="/admincoin" class="main-btn">Открыть админ панель</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import LeftMenu from "../components/LeftMenu.vue";

export default {
  data() {
    return {
      currentuser: {
        name: "Семён",
        age: 21,
        groupnumber: "PS  212019",
        role: "user",
      },
    };
  },
  components: {
    LeftMenu,
  },
};
</script>

<style>
#home {
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
html {
  overflow-x: hidden;
}

#logo > img {
  width: 250px;
  border-radius: 200px;
  padding: 10px 10px;
}
#logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#logo > .description {
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, Impact;
  font-weight: bold;
}
#logo > .description > #name {
  font-size: 50px;
  padding-left: 10px;
}
#logo > .description > #age {
  opacity: 88%;
  font-size: 22px;
  padding-left: 15px;
}
#logo > .description > #groupnumber {
  opacity: 88%;
  font-size: 22px;
  padding-left: 15px;
}
.second-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 30px 10px 10px;
}

.content {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  left: 6%;
  position: relative;
  width: 94%;
}
table {
  font-family: sans-serif;
  border-collapse: separate;
  border-spacing: 15px;
  color: rgb(255, 255, 255);
  border-radius: 20px;
}
th {
  font-size: 18px;
  padding: 10px;
}
td {
  background: rgb(101 191 165);
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 25px;
}
td:last-child {
  background: rgb(87 116 182);
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 25px;
}
.main-btn{
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
.main-btn:focus{
  outline: none;
}
</style>
