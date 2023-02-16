<script setup lang="ts">

import NavBar from "./components/navBar.vue";
</script>

<template>
  <NavBar/>
  
  
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <router-link class="navbar-brand handwritten navElements" to="/auction101">Auction101</router-link>
            <router-link class="navbar-brand navElements ml-auto" to="/createItem">Create Item</router-link>
            <router-link class="navbar-brand navElements ml-auto" to="/profile">Profile</router-link>
            <router-link class="navbar-brand navElements ml-auto" to="/userItems">Your Items</router-link>
            <router-link class="navbar-brand navElements ml-auto" to="/itemsWon">Items Won</router-link>
            
        </div>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
