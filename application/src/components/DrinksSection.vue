<script setup>

</script>

<template>
  <article class="drinks container">
      <div class='img'>
        <img class="bottom" src="../assets/3.webp" />
        <img class="top" src="../assets/4.webp" />
      </div>
      <div class="container_text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.</p>
      </div>
  </article>

</template>

<style scoped>
h2 {}

.drinks {
  height: 500px;
}

.img {
  display: flex;
  margin: auto;
}

.container_text {
  display: flex;
  width: 50%;
  float: right;
}


div img {
  position: absolute;
  margin: auto;
}

.top {
  animation-name: fade;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 6s;
  animation-direction: alternate;
}

@keyframes fade {
  0% {
    opacity: 1;
  }

  25% {
    opacity: 1;
  }

  75% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}
</style>