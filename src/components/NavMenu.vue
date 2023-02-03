<script setup>


</script>

<template>
  <div class="nav-container">
    <input type="checkbox" id="toggle" name="toggle">
    <ul class="nav-list">
      <li class="menu-item"><a class="nav-link" href="#a">Home</a></li>
      <li class="menu-item"><a class="nav-link" href="#b">About</a></li>
      <li class="menu-item"><a class="nav-link" href="#c">Team</a></li>
      <li class="menu-item"><a class="nav-link" href="#d">Contact</a></li>
      <li class="menu-item"><a class="nav-link" href="#e">Twitter</a></li>
    </ul>
    <label class="navbar-toggler" for="toggle">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </label>

  </div>
</template>

<style scoped>
.nav-list {
  position: fixed;
  top: 0;
  right: -100%;
  width: 60vw;
  height: 100%;
  padding: 50px 0;
  margin-top: 60px;
  background-color: #131313;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition-duration: .25s;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  line-height: 75px;
}

.menu-item {
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
}

.menu-item:hover {
  background-color: #28546C;
}

.navbar-toggler {
  display: grid;
  cursor: pointer;
}

.navbar-toggler .bar {
  width: 40px;
  height: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  transition: .4s;
  background-color: #28546C;
}

#toggle {
  display: none;
}

#toggle:checked ~ .nav-list {
  right: 0 !important;
}

#toggle:checked ~ .navbar-toggler .bar:nth-child(1) {
  margin: 0;
  transform: rotate(45deg)
}

#toggle:checked ~ .navbar-toggler .bar:nth-child(2) {
  margin:0;
  width: min-content;
  height: min-content;
  transform: rotate(45deg);
}

#toggle:checked ~ .navbar-toggler .bar:nth-child(3) {
  margin:0;
  transform: rotate(-45deg)
}
</style>