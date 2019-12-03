<template>
  <div id="app" :class="$mq">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Teko:700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  --main-color: #ff5851;
  --main-black: #0b0b0b;
  --light-grey: #f8f8f8;
  background-color: var(--light-grey);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
}

#app.small {
  padding: 0;
}

#app a {
  text-decoration: none;
}

.red {
  color: var(--main-color);
}
</style>
