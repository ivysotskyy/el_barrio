<script>
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import DrinksSection from './components/DrinksSection.vue'
import EventsPage from './components/EventsPage.vue'
import TheFooter from './components/TheFooter.vue'
import TheOwner from './components/TheOwner.vue'
import GallerySection from './components/GallerySection'


export default {
  name: 'App',
  components: {
    TheHeader,
    HeroSection,
    TheOwner,
    DrinksSection,
    EventsPage,
    GallerySection,
    TheFooter,
  }
}
</script>

<template>
  <main>

    <section class="home section">

      <TheHeader id="header"/>

      <img id="main-logo" src="./assets/logo/EL_BARRIO_CIRCLE_BLACKWHITE.png">

      <HeroSection class="hero"/>

      <TheOwner id="owner"/>

    </section>

    <section class="drinks section">

      <DrinksSection id="drinks"/>

    </section>

    <section class="events section">
      <article>
        <EventsPage id="events"/>
      </article>
    </section>
    <section class="gallery section">
      <GallerySection id="gallery"/>
    </section>
    <TheFooter/>
  </main>

</template>

<style>
@import "../public/reset.css";

@font-face {
  font-family: "Source Sans Pro";
  src: local("Source Sans Pro"),
  url(fonts/SourceSansPro/SourceSansPro-Regular.ttf) format("truetype");
}

#main-logo {
  display: block;
  width: 15rem;
  margin: 5.6rem auto;
}

.container {
  padding: 16px 16px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 2rem;
}

.drinks {

}

.section {
  display: flex;
  flex-direction: column;
  width: 90vw;
}

</style>
