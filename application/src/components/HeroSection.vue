<script setup>

</script>

<template>

  <article class="hero container">

    <h1>el barrio</h1>
    <p>
      <span><b>Die nachbarschafts Bar um die Ecke</b></span><br>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book.
    </p>

    <a href="/">
      <button class="button" >Button</button>
    </a>

  </article>

</template>

<style scoped>

.arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  
}

.button {
  cursor: pointer;
  margin-top: 3em;
  background-color: #28546C;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
}



.container h1 {
  font-size: 30px;
}

</style>
