<template>
<div class="dropdown">
  <button class="dropbtn" click="">Регионы</button>
  <div class="dropdown-content">
    <div class="town">
        <a>Тула</a>
        </div>
    <a href="#">Москва</a>
    <a href="#">Ссылка 3</a>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
 .dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Контейнер <div> - необходимо разместить выпадающий контент */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Выпадающий контент (скрыт по умолчанию) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Ссылки внутри выпадающего */
.dropdown-content a .town{
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Изменить цвет выпадающих ссылок при наведении */
.dropdown-content a:hover .town{background-color: #f1f1f1}

/* Показать выпадающее меню при наведении */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Изменить цвет фона кнопки выпадающего списка, когда отображается содержимое выпадающего списка. */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

</style>>
