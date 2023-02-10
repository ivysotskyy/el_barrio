<script>

</script>

<template>
  <div class="container">
    <div class="img"><img src="../assets/graffiti.jpg" /></div>
    <p class="text">
      <span class="h2"><b>Unser meister Wirt</b></span><br>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
      a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
    </p>
  </div>
  
</template>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}


img {
  width: 400px;
  height: 400px;
}

.h2 {
  font-size: 25px;
}

p {
  margin: 20rem auto;
  margin-left: 1.5em;
  margin-right: 3em;
  background: rgba(0,0,0,0.77);
}

.img {
  text-align: center;
  margin-top: 19%;
}

@media only screen and (max-width: 768px) {
  img {
    width: 240px;
    height: 240px;
    margin-top: 19%;
  }

  .text {
    margin-top: 2em;
    margin-right: 1.2em;
  }
}

.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
}

.container>* {
  flex: 1 1 200px;
}

</style>