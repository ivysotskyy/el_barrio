<script>
import TheHeader from './components/TheHeader.vue'
import MyHero from './components/MyHero.vue'
import TheOwner from './components/TheOwner.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    MyHero,
    TheOwner,
    TheFooter
  }
}
</script>

<template>
  <main>
    <article class="hero-container">
      <TheHeader/>
      <img id="main-logo" src="./assets/logo/EL_BARRIO_CIRCLE_BLACKWHITE.png">
      <section class="hero">
        <MyHero/>
      </section>
      <section class="owner-container">
        <TheOwner />
      </section>
    </article>
    <article>

    </article>
    <TheFooter />
  </main>
</template>

<style>
@import "../public/reset.css";

section {
  padding: 0 0.5rem;
  max-width: 75vw;
  margin: auto;
}

#main-logo {
  display: block;
  width: 20rem;
  margin: auto;
}
body {
  margin: 0;
}

.hero-container {
  background-image: url("./assets/bar-front-dark2.jpg");
  position: center;
  background-repeat: no-repeat;
  background-position: center top;
  object-fit: fill;
}

.owner-container {
  display: flex;
  flex-flow: row nowrap;
  padding-bottom: 4rem;
}

</style>
