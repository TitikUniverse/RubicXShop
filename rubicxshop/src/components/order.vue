<template>
  <div>
      <container class="ProductCard">
          <div class="ProductImage">  
           <p><img src="https://pngimg.com/uploads/watches/watches_PNG9889.png" height="120px" style="padding: 15px"/></p>
          </div>
           <div class="ProductTitle">
               <span class="Title">Смарт часы</span>
                </div>
           <div class="ProductPrice">
                <span class="Title">1000руб</span>
                </div>
           <div class="OrderTime">
                <span class="Title">Ожидание</span>
                </div>
        
          
      </container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.ProductTitle{
display: block;

    
}
.ProductPrise{
display: block;
flex-direction: column;
}
.OrderTime{
display: block;
flex-direction: column;
}
.Title{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    
} 

.ProductCard{ 
    background-color: darkgrey;
    border-radius: 20px;
    width:600px;
    height: 150px;
}
container {
  display: flex;
  
}
</style>