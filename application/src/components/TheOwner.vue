<script>

</script>

<template>
  <article class="owner container">
    <div>
      <div class="img"><img src="../assets/graffiti.jpg" /></div>
      <div class="text">
        <h2>Unser meister Wirt</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make
          a type specimen book.
        </p>
      </div>
    </div>
  </article>

</template>

<style scoped>
img {
  height: 350px;
}


.h2 {
  font-size: 25px;
}

.owner {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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