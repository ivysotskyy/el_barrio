<script setup>
import NavBar from "./NavMenu"


</script>

<template>
  <header id="header">
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
  margin: 20px auto;
  position: sticky;
  width: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 3rem;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 5px;
}

.header-logo {
  width: 7rem;
  margin: auto;
}

</style>