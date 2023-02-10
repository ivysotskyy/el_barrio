<script setup>

</script>

<template>
  <article class="drinks container">
    <div>
      <div class='img'>
        <img class="bottom" src="../assets/alcohol/3.webp" />
        <img class="top" src="../assets/alcohol/4.webp" />
      </div>
      <div class="container_text">

      </div>
    </div>
  </article>

</template>

<style scoped>
h2 {}

.drinks {
  height: 500px;
}

div {
  position: relative;
}

div img {
  position: absolute;
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