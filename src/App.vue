<script>
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import DrinksSection from './components/DrinksSection.vue'
import EventsPage from './components/EventsPage.vue'
import TheFooter from './components/TheFooter.vue'
import TheOwner from './components/TheOwner.vue'


export default {
  name: 'App',
  components: {
    TheHeader,
    HeroSection,
    DrinksSection,
    EventsPage,
    TheFooter,
    TheOwner
  }
}
</script>

<template>
  <main>

    <section class="home-section">
      <TheHeader/>
      <img id="main-logo" src="./assets/logo/EL_BARRIO_CIRCLE_BLACKWHITE.png">

      <HeroSection class="hero"/>

      <TheOwner class="owner"/>

    </section>

    <section class="drinks-section">
      <DrinksSection class="drinks"/>
    </section>

    <section>
      <article class="events-section">
        <EventsPage class="events"/>
      </article>
    </section>

    <TheFooter/>
  </main>
</template>

<style>
@import "../public/reset.css";

@font-face {
  font-family: "Source Sans Pro";
  src: local("Source Sans Pro"),
  url(./fonts/SourceSansPro/SourceSansPro-Regular.ttf) format("truetype");
}

#main-logo {
  display: block;
  width: 15rem;
  margin: auto auto 40px;
}

body {
  margin: 0;
}

.events {
  background-image: url("./assets/events.webp");
  position: center;
  background-repeat: no-repeat;
  object-fit: fill;
  width: 100%;
  height: 950px;
  background-position: center center;
}

.home-section {
  background-image: url("./assets/home-page-img.webp");
  position: center;
  background-repeat: no-repeat;
  object-fit: fill;
  width: 100%;
  height: 950px;
  background-position: center center;

}

.drinks {
  background-image: url("./assets/second-background.webp");
  padding-bottom: 4rem;
  position: center;
  background-size: contain;
  width: 100%;
  height: 950px;
  background-position: center center;
}

</style>
