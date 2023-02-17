<script lang="ts">
import { defineComponent } from 'vue'

</script>
<template>
<footer class="text-center light_blue" >
  
  <div class=" p-2 pb-0  flex-column light_blue" >     
    <div class=" row align-items-start  ">
    <div class="col">
      <h6>About Us</h6>
    <p class="text-dark" style="text-align:left">Vida Vodka was developed as an eco friendly vodka company that prioritises quality and taste, using waste bread and our patented method.  </p>
    </div>
    <div class="col ">     
      <a href="#!" class="text-dark">CONTACT US</a>
    </div>
    <div class="col ">
      <a class="" href="#"><img src="./assets/shopify.png" class="footbuttons" alt="shopify"/></a>
      <a class="" href="#"><img src="./assets/instagram.png" class="footbuttons" alt="instagram"/></a>
    </div>
    
  </div>      
      <p>©Vida Vodka</p>
  </div>
</footer>
</template>
<style scoped>
footer {
  
  width: auto;
  height: 50px;
}
.footbuttons {
  width:30px;
  height: auto; 
}

.light_blue {
  background-color: #ddffff;
}
.row {
    --bs-gutter-x: 0rem;
}

@media (max-width: 1000px) {
    .row {
      display: initial; 
    }
 
}


</style>