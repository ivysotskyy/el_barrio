<template>
    <div class="modal" :class="{ 'is-visible': images && index !== null }">
      <div class="modal__header">
        Title
        <button type="button" @click="$emit('close')">X</button>
      </div>
      <div class="modal__body">
        <div class="main-image">
          <hooper group="group1" ref="main">
            <slide v-for="(image, index) in images" :key="index">
              <img class="image" :src="image" />
            </slide>
  
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
          </hooper>
        </div>
  
        <div class="thumbnails" v-if="images">
          <hooper
            ref="thumbnails"
            group="group1"
            :itemsToShow="12"
            :centerMode="true"
          >
            <slide v-for="(image, index) in images" :key="index">
              <img class="image" :src="image" @click="carouselIndex = index" />
            </slide>
  
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
          </hooper>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
  
  export default {
    components: {
      Hooper,
      Slide,
      HooperNavigation,
    },
    name: "GalleryModal",
    props: ["index", "images"],
    data() {
      return {
        carouselIndex: 0,
      };
    },
    mounted() {
      this.carouselIndex = this.index;
    },
    watch: {
      carouselIndex() {
        this.$refs.main.slideTo(this.carouselIndex);
        this.$refs.thumbnails.slideTo(this.carouselIndex);
      },
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    background: white;
  }
  
  .modal.is-visible {
    display: flex;
    flex-direction: column;
  }
  
  .modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 1rem;
    border-bottom: 1px solid rgb(133, 225, 236);
  }
  
  .modal__body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .main-image {
    height: 100%;
  }
  
  .main-image .hooper {
    height: 100%;
    min-height: 200px;
  }
  
  .main-image .hooper-slide {
    position: relative;
  }
  
  .main-image .image {
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
    max-width: 100%;
    max-height: 100%;
    height: auto;
  }
  
  .thumbnails {
    height: 25%;
    padding-top: 1rem;
  }
  
  .thumbnails .hooper {
    height: 100px;
  }
  
  .thumbnails .hooper-slide:not(.is-current) {
    opacity: 0.5;
  }
  
  .thumbnails .image {
    max-width: 100%;
    max-height: 100%;
    height: auto;
  }
  </style>