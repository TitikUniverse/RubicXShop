<template>
  <div class="hamburger-menu">
  <input id="menu__toggle" type="checkbox" />
  <label class="menu__btn" for="menu__toggle">
    <span></span>
  </label>
  <ul class="menu__box">
   
   <router-link to="/shop"><li><a class="menu__item" href="#">Магазин</a></li></router-link>
   <router-link to="/orders"> <li><a class="menu__item" href="#">Лист ожиданий</a></li></router-link>
   <router-link to="/profile"> <li><a class="menu__item" href="#">Профиль</a></li></router-link>
    <router-link to="/forgot"><li><a class="menu__item" href="#">Смена пароля</a></li></router-link>
  </ul>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

/* скрываем чекбокс */
#menu__toggle {
  opacity: 0;
}
/* стилизуем кнопку */

.menu__btn {
  display: flex; /* используем flex для центрирования содержимого */
  align-items: center;  /* центрируем содержимое кнопки */
  position: fixed;
  top: 40px;
  left: 30px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
  
@media only screen and (min-device-width: 479px) {
    margin-top:5%;
    margin-left: 2%;
    left: -100%;
 
    
  } 

}
/* добавляем "гамбургер" */
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #ffffff;


}
.menu__btn > span::before {
  content: '';
  top: -8px;
}
.menu__btn > span::after {
  content: '';
  top: 8px;
}

/* контейнер меню */
.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: -100%;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  text-align: center;
  background-color: #100a0a8c;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
}
/* элементы меню */
.menu__item {
  display: block;
  padding: 12px 24px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
}
.menu__item:hover {
  background-color: #eaf5fa00;
}

#menu__toggle:checked ~ .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  visibility: visible;
  left: 0;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  transition-duration: .25s;
}
.menu__box {
  transition-duration: .25s;
}
.menu__item {
  transition-duration: .25s;
}

</style>