<script>
import TheHeader from './components/header-nav.vue'
import home from './components/home-page.vue'
import alcohol from './components/alcohol-page.vue'
import TheFooter from './components/footer-nav.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    home,
    alcohol,
    TheFooter
  }
}
</script>

<template>
  <main>
    <article class="home-container">
      <TheHeader />
      <img id="main-logo" src="./assets/logo/EL_BARRIO_CIRCLE_BLACKWHITE.png">
      <section class="hero">
        <home />
      </section>
    </article>
    <section class="alcohol-container">
      <alcohol />
    </section>
    <article>
    </article>
    <TheFooter />
  </main>
</template>

<style>
@import "../public/reset.css";

@font-face {
  font-family: "Source Sans Pro";
  src: local("Source Sans Pro"),
  url(./fonts/SourceSansPro/SourceSansPro-Regular.ttf) format("truetype");
}

section {
  padding: 0 0.5rem;
  margin: auto;
}

#main-logo {
  display: block;
  width: 15rem;
  margin: auto;
  margin-bottom: 40px;
}

body {
  margin: 0;
}

.home-container {
  background-image: url("./assets/bar-front-dark2.jpg");
  position: center;
  background-repeat: no-repeat;
  background-position: center top;
  object-fit: fill;
  width: 100%;
  height: 950px;
  background-position: center center;
  
}

.alcohol-container {
  background-image: url("./assets/second-background.webp");
  padding-bottom: 4rem;
  position: center;
  background-size: cover;
  width: 100%;
  height: 950px;
  background-position: center center;
}
</style>
