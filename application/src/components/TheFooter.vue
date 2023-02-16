<script>

</script>

<template>
  <div class="foot">
    <footer class="footer">
      <div class="footer__addr">
        <h2>OUR CONTACT INFO</h2>
        <div class="img">
          <img src="../assets/logo/EL_BARRIO_CIRCLE_BLACKWHITE.png" width="150" height="150" />
        </div>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">MAP & DIRECTIONS</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.4228268521165!2d14.309825815853689!3d48.256237050867576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773bdd5ba1d8575%3A0xf22fb37178c17d82!2sEl%20Barrio!5e0!3m2!1sen!2sua!4v1675713241908!5m2!1sen!2sua"
            width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </li>

        <li class="nav__item nav__item--extra">
          <h2 class="nav__title">THE LOCAL</h2>
          <ul>Address</ul>
          <p>Pestalozzistraße 81, 4030 Linz, Austria</p>
          <ul>Phone</ul>
          <p>+43 676 3235733</p>
          <a href="https://www.facebook.com/elbarriolinz/"><img class="img__facebook"
              src="../assets/social/1200px-Facebook_icon_(black).svg.png" /></a>
          <a href="https://www.instagram.com/elbarriolinz/"><img class="img__instagram"
              src="../assets/social/CIS-A2K_Instagram_Icon_(Black).svg.png" /></a>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">HOURS</h2>
          <p>Tuesday - Thurs.: 6:00 pm - 01:00 am</p>
          <p>Friday - Sat.: 6:00 pm - 04:00 am</p>
          <p>Sunday - Monday: Closed</p>
        </li>
      </ul>

      <div class="privacy_container">
        <div class="links">
          <a href="/" onmouseover="style='text-decoration:underline'" onmouseout="style='text-decoration:none'">Home</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="/" onmouseover="style='text-decoration:underline'" onmouseout="style='text-decoration:none'">About</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="/" onmouseover="style='text-decoration:underline'" onmouseout="style='text-decoration:none'">Contact</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="/" onmouseover="style='text-decoration:underline'" onmouseout="style='text-decoration:none'">Privacy Policy</a>
        </div>
        <div class="legal">
          <p>&copy; 2023 El Barrio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}
.privacy_container {
  display: flex;
  flex-wrap: no wrap;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: black;
  height: 60px;
}

.links{
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  font-size: 14px;
  color: darkgray;
}

html {
  font-size: 100%;
}

body {
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #f4f4f4;
  align-items: start;
  min-height: 100vh;
}

p {
  font-size: 14px;
  color: darkgray;
}

a {
  font-size: 14px;
  color: darkgray;
}


.img__instagram {
  text-align: center;
  height: 25px;
  width: 25px;
}

.img__facebook {
  text-align: center;
  height: 25px;
  width: 25px;
}

.nav__item {
  text-align: center;
  display: block;
}

.footer {
  display: flex;
  flex-flow: row wrap;
  color: #2f2f2f;
  background-color: #131313;
  text-align: center;
}

.footer>* {
  flex: 1 100%;
}

.footer__addr {
  margin-right: 2px;
  margin-bottom: 2em;
}


.footer__addr h2 {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 400;
}

.nav__title {
  font-weight: 400;
  font-size: 16px;
}

.footer address {
  font-style: normal;
  color: #999;
}

.footer ul {
  list-style: none;
  padding-left: 0;
}

.footer li {
  line-height: 2em;
}

.footer a {
  text-decoration: none;
}

.footer__nav {
  display: flex;
  flex-flow: row wrap;
  margin-left: 10px;
  padding-bottom: 15px;
}

.footer__nav>* {
  flex: 1 50%;
  margin-right: 1.25em;
}

.legal {
  display: flex;
  padding-left: 10px;
  padding-bottom: 10px;
  flex-wrap: wrap;
  color: #999;
  font-size: 12px;
}


@media screen and (min-width: 24.375em) {
  .legal .legal__links {
    margin-left: auto;
  }
}

@media screen and (min-width: 40.375em) {
  .footer__nav>* {
    flex: 1;
  }

  .nav__item--extra {
    flex-grow: 2;
  }

  .footer__addr {
    flex: 1 0px;
  }

  .footer__nav {
    flex: 2 0px;
  }

}
</style>