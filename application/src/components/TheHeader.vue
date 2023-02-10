<script setup>

import {ref} from 'vue';
import NavBar from "./NavMenu.vue"

const scroll = ref(false);
const handleScroll = function () {

  let y = window.scrollY;

  if (y < 30) {

    scroll.value = false;

  }
  else {
    scroll.value = true;
  }

}

</script>

<template>

  <header id="header" :class="{sticky: scroll}" v-scroll="handleScroll">

    <nav>
      <div class="logo-container">
        <a href="/"><img class="header-logo" src="../assets/logo/EL_BARRIO_WHITE.png"></a>
      </div>
      <NavBar/>
    </nav>

  </header>

</template>

<style scoped>

nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
}

#header {
  margin: 1.4rem auto;
  min-width: 95%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 3rem;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 5px;
  transition: 0.62s ease-in-out;
}

.header-logo {
  width: 7rem;
  margin: auto;
}

.sticky {
  width: 100%;
  higth: 100px;
  background-color: rgba(255, 0, 0, 0) !important;
  transition: 0.42s ease-in-out;

}

</style>