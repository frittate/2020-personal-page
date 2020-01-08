<template>
  <div id="app" :class="$mq">
   <!-- <page-transition /> -->
    <!-- <transition 
    v-on:before-enter="rightToLeft" 
    v-on:appear="setup" 
    v-bind:css="false"> -->
      <router-view />
    <!-- </transition> -->
  </div>
</template>

<script>
import { gsap } from "gsap";
require('@/assets/css/typo.css')
//import PageTransition from './components/PageTransition';

export default {
  components: {
    //PageTransition
  },
  methods: {
     rightToLeft: function(done){
       let tl = gsap.timeline();
        tl.fromTo('.sm-transition--black', {scaleX: 0}, {scaleX: 1, duration: 0.6, transformOrigin: 'right', ease: 'Power4.easeInOut'},)
        .to('.sm-transition--black', {scaleX: 0, duration: 0.6, transformOrigin: 'left', ease: 'Power4.easeInOut'},)
        .fromTo('.sm-transition--main', {scaleX: 0}, {scaleX: 1, duration: 0.8, transformOrigin: 'right', ease: 'Power4.easeInOut'})
        .to('.sm-transition--main', {scaleX: 0, duration: 0.8, transformOrigin: 'left', ease: 'Power4.easeInOut'},)

        done()
     },
     setup: function(done){
       gsap.set('.sm-transition', {scale: 0});
       done()
     }
  },
}
</script>

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
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
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
