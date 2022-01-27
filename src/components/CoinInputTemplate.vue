<template>
    <div class="coincount">
      <div class="student-name">
        <span>Титов Семен</span>
      </div>
        <div class="addition">
          <div class="addition-item">
            <button class="minusbutton">-</button>
              <input class="Flash">
            <button class="plusbutton">+</button>
          </div>
          <div class="addition-item">
            <button class="minusbutton">-</button>
              <input class="Flash">
            <button class="plusbutton">+</button>
          </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang=scss scoped>
.coincount{
  width: 40%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}
.coincount input {
  width: 30%;
  height: 100%;
}
.coincount .minusbutton{
  width:  30%;
  height: 100%;
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  // padding: 5px 10px;
  outline: none;
  border: none;
  background-color: #1274e4;

  overflow: hidden;
  border-radius: 50px 0px 0px 50px;
  
}

.student-name{
  height: 30px;
  font-size: 15px;
}
.coincount .plusbutton{
  width: 30%;
  height: 100%;
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  // padding: 5px 10px;
  outline: none;
  border: none;
  background: rgb(87 116 182);
  overflow: hidden;
  border-radius: 0px 50px 50px 0px;
  
}
.addition{
  height: 50%;

  display: flex;
  flex-direction: row;
}

.addition-item {
  width: 110px;
}
.Flash{
 size: 100px;
}

</style>