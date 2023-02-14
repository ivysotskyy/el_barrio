<script>

</script>

<template>
  <article class="owner container">
    <div class="img"><img src="../assets/graffiti.jpg" /></div>
    <div class="text">
      <h2>Unser meister Wirt</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
        make
        a type specimen book.
      </p>
      <a href="/">
        <button class="button">See more</button>
      </a>
    </div>
  </article>

</template>

<style scoped>
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

img {
  height: 350px;
}

.text {
  margin: auto;
}


.h2 {
  font-size: 25px;
}

.owner {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
}

@media only screen and (min-width: 1090px) {
  .owner {
    flex-wrap: nowrap !important;
  }
}
</style>