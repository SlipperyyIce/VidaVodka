<script lang="ts">
import { defineComponent } from 'vue'

export default {
  
  async mounted() {
    
    const script = document.createElement("script");

    script.src = await "http://www.instagram.com/embed.js";
    script.async = true;
    
    document.body.appendChild(script);
  },
};

</script>
<template>
<div style="background-color: #1d4b62; ">  
  <div class="topdiv"></div>
  <div class="underbottle_div"></div>

  <div class="flex-column " >

  <div class=" row align-items-start  "></div> 
  <img src="./assets/Bottle.png" class="" alt="...">
  </div>
  
  
  <div class="container intro col">
    <h1 class="display-6 " style="color: #ae00ff;">Introducing Vida Vodka</h1>
    <p class="lead" style="width: 300px; text-align: left ;">With its distinctive flavor and aroma, This breadbased product is the perfect choice for those who appreciate a premium vodka with a twist.</p>
  </div>
  
  <div class="container missionstat ">
    <h1 class="display-6 intro-txt" style="color: #ae00ff; text-align: right;">Our Mission</h1>
    <p class="lead text-white intro-txt" style="width: 400px; text-align: right ;">Is to create a premium vodka product that not only delivers exceptional taste and quality but also promotes sustainability by utilizing waste bread in its production. We strive to reduce food waste, inspire others to join us in the fight against it, and create a world where sustainability and indulgence can coexist.</p>
    <p class="lead text-white intro-txt" style="width: 400px; text-align: right ;">Join us on our journey by following out instagram or purchasing our products.</p>
    
  </div>
  
  <blockquote class="instagram-media embed" data-instgrm-permalink="https://www.instagram.com/tv/CdBm9_RqHND/?utm_source=ig_embed" data-instgrm-version="14"
    style="">
  </blockquote>
  
</div>


</template>
<style scoped>

img{
  width: auto\9;
  height: 500px;
  z-index: 100;
  position: relative;
  overflow:hidden;
  left: 160px;
}
.topdiv{
  background-color: #ddffff;
  height: 450px;
  position:absolute;
  left: 0;
  right: 0;
  z-index: 0; 
}

.underbottle_div{
  background-color: #cfcecd;
  height: 110px;
  position:absolute;
  top: 470px;
  left: 0;
  right: 0;
  z-index: 1; 
}

.intro{
  z-index: 100; 
  position:absolute;
  text-align: justify;
  top: 220px;
  left: 120px;

}
.missionstat{
  z-index: 100; 
  position:absolute;
  text-align: justify;
  top: 600px;
  left: 670px;
  height: 300px;
}

.instagram-media{
  width: 100px;;
}

.container{
  width: max-content;
}

@media (max-width: 1025px) {
  .intro{
    left: 40px;
  }

  .missionstat{
    left: 520px;
  }
  
}

@media (max-width: 960px) {
  .missionstat{
    left: 400px;
  } 
  .intro-txt{
    width: 320px!important;
  }
}

@media (max-width: 720px) {
  img{
    position:absolute;
    left: 40px;
  }

}
@media (max-width: 540px) {
  img{
  
    position:absolute;
    margin: auto!important;
    left: 0;
    right: 0;
  }
  .underbottle_div{
    height: 140px;
  }
  .intro{
    top: 620px;
    color: white!important;
    margin: auto!important;
    left: 0;
    right: 0;
  }
  .missionstat{
    margin: auto!important;
    left: 0;
    right: 0;
    width: 300px;
    top: 1360px;
    
  }
  .intro-txt{
      text-align: left!important;
      width: 300px!important;
      margin-left: auto;
      margin-right: auto;
      margin: auto!important;
  }

}
@media (max-width: 400px) {
  img{ 
    width: -webkit-fill-available;
    height: auto;
    
  }
  .underbottle_div{
    top: 420px;
  }
}


</style>