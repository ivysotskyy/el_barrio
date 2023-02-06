<script setup>
import {ref} from 'vue';
import NavBar from "./NavMenu"

const sticky = ref(false);
const handleScroll = function (evt, el) {
  let y = el.offsetTop

  if (y < 50) {

    sticky.value = false;
  }
  else {
    sticky.value = true;
  }

  // if(el.offsetTop <= window.scrollY) {
  //   sticky.value = true;
  // }else {
  //   sticky.value = false;
  // }

}

</script>

<template>
  <header id="header" :class="{sticky: sticky}" v-scroll="handleScroll">
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
  position: sticky;
  margin: 20px auto;
  top: 0;
  width: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 3rem;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 5px;
  transition: 0.56s ease-in-out;
}

.header-logo {
  width: 7rem;
  margin: auto;
}

.sticky {
  margin-top: 0 !important;
  width: 100% !important;
  background-color: rgba(255, 0, 0, 0) !important;
  transition: 0.56s ease-in-out;
}

</style>