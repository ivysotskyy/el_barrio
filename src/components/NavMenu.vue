<script setup>
import {ref} from "vue";

const isOpen = ref(false);

</script>

<template>
  <div class="nav-container">
    <div>
      <ul class="nav-list" :class="{open: isOpen}">
        <li class="menu-item"><a class="nav-link" href="#a">Home</a></li>
        <li class="menu-item"><a class="nav-link" href="#b">About</a></li>
        <li class="menu-item"><a class="nav-link" href="#c">Team</a></li>
        <li class="menu-item"><a class="nav-link" href="#d">Contact</a></li>
        <li class="menu-item"><a class="nav-link" href="#e">Twitter</a></li>
      </ul>
    </div>
    <div @click="isOpen = !isOpen" class="hamburger" :class="{open: isOpen}">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>

  </div>
</template>

<style scoped>

.nav-list {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100vw;
  height: 100%;
  opacity: 0;
  background-color: rgba(17, 17, 17, 0.98);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  -webkit-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);

  transition: .25s ease-in-out;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  line-height: 75px;
  justify-content: center;
}

.nav-list.open {
  right: 0;
  opacity: 100;
  filter: none;
}

.menu-item {
  margin: 0 auto;
  width: 70%;
  cursor: pointer;
  font-size: 2rem;
  min-height: 3rem;
  letter-spacing: 1px;
}

.nav-link {
  line-height: 75px;
  font-weight: 500;
  display: block;
  color: #AA7639;
  margin: 15px;
  text-align: center;
}

.menu-item:hover {
  background-color: #28546C;
}

.hamburger {
  z-index: 1;
  position: relative;
  margin: auto 0;
  width: 50px;
  height: 45px;
  align-self: start;
  display: block;
  cursor: pointer;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
}

.hamburger .bar {
  left: 0;
  position: absolute;
  width: 100%;
  height: 6px;
  display: block;
  opacity: 1;
  transition: .25s ease-in-out;
  background-color: #28546C;
  border-radius: 15px;
}

.hamburger .bar:nth-child(1) {
  top: 0px;
}

.hamburger .bar:nth-child(2) {
  top: 15px;
}

.hamburger .bar:nth-child(3) {
  top: 30px;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(135deg);
  top: 10px;
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.hamburger.open span:nth-child(3) {
  top: 10px;
  transform: rotate(-135deg);
}

</style>