<script setup>

</script>

<template>
  <article class="drinks container">
    <div>
      <img class="bottom" src="../assets/3.webp" />
      <img class="top" src="../assets/4.webp" />
    </div>
    <div class="text">
      <h2>DRINKS</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.</p>
      <a href="/">
        <button class="button">See more</button>
      </a>
    </div>
  </article>

</template>

<style scoped>
h2 {}

.button {
  margin-top: 1.5rem;
  color: white;
  background-color: #28546C;
  padding: 10px 16px;
  border-radius: 20px;
  transition: all .3s ease;
  font-weight: bold;
  cursor: pointer;
  align-items: center;
  font-size: 14px;
}


.button:hover {
  background-color: #86b8d3b0;
  color: #fff;
}

.drinks {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.img {
  display: flex;
  margin: auto;
}

.text {
  margin: auto;
}

div {
  position: relative;
  text-align: center;
}

div img {
  margin: 0 auto;
  position: absolute;
}

.top {
  animation-name: fade;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 6s;
  animation-direction: alternate;
  position: relative;
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

@media only screen and (min-width: 1090px) {
  .drinks {
    flex-wrap: nowrap !important;
  }
}
</style>