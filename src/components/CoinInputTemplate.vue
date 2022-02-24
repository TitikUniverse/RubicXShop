<template>
    <div class="coincount">
      <div class="student-name">
        <span>Титов<br />Семен</span>
      </div>
      <div class="addition">
        <div class="addition-item">
          <div class="addition-button">
            <button class="minusbutton">-</button>
              <input class="Flash">
            <button class="plusbutton">+</button>
          </div>
        </div>

        <div class="addition-item">
          <div class="addition-button">
            <button class="minusbutton">-</button>
              <input class="Flash">
            <button class="plusbutton">+</button>
          </div>
        </div>

        <div class="addition-item">
          <div class="addition-button">
            <button class="minusbutton">-</button>
              <input class="Flash">
            <button class="plusbutton">+</button>
          </div>
        </div>

        <div class="addition-item">
          <div class="addition-button">
            <button class="minusbutton">-</button>
              <input class="Flash">
            <button class="plusbutton">+</button>
          </div>
        </div>

        <div class="addition-item">
          <div class="addition-button">
            <button class="minusbutton">-</button>
              <input class="Flash">
            <button class="plusbutton">+</button>
          </div>
        </div>

        <div class="addition-item">
          <div class="addition-button">
            <button class="minusbutton">-</button>
              <input class="Flash">
            <button class="plusbutton">+</button>
          </div>
        </div>

        <div class="addition-item">
          <div class="addition-button">
            <button class="minusbutton">-</button>
              <input class="Flash">
            <button class="plusbutton">+</button>
          </div>
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
  font-size: 20px;
  display: flex;
  flex-direction: column;
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
  border-radius: 7px 0px 0px 7px;
  
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
  border-radius: 0px 7px 7px 0px;
  
}


.student-name{
  height: 70px;
  font-size: 20px;
  text-align: left;
  margin-left: 0px;
}

.coinname{
  font-size: 15px;
}

.addition{
  height: 50%;

  display: flex;
  flex-direction: column;
}

.addition-item {
  width: 130px;
  margin-bottom: 15px;
  text-align: start;
}
.Flash{
 size: 100px;
}

</style>