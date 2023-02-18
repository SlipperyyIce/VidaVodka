<script lang="ts">
import { defineComponent } from 'vue'
export default {
};
</script>
<template>

<nav class="navbar navbar-expand">
  
  <a class="navbar-brand my-40" href="#"><img src="./assets/logo.png" class="logo" alt="Vite logo" /></a>


  <div class="position-absolute end-0 " id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ">
       
      <li class="nav-item active">
        <a class="nav-link" href="#"><img src="./assets/shopping.png" class="navbuttons" alt="Shop"/></a>          
      </li>
      
           
    </ul>
    
  </div>

</nav>
</template>

<style scoped>

nav {
    background-color: #ddffff;
    display: flex;
    position: inherit;
    height: 50px;
    
}

.logo {
  width:150px;
  height: 150px;
  left: 120px;
  top: 60px;
  position: relative;
  z-index: 100;
}

.navbuttons {
  width:20px;
  height: auto;
  color:black;

  
}
.handwritten {
    font-family: Pacifico, cursive;
}

.navElements {
    font-size: 144%;
    text-decoration: none;
}

.end-0 {
    right: 20px !important;
}

@media (max-width: 1000px) {
  .logo {
  
  left: 40px;

}

}
</style>

