<template>
    <div class="sm-transition__wrapper">
      <div class="sm-transition sm-transition--black"></div>
      <div class="sm-transition sm-transition--main"></div> 
    </div>

</template>



<style>

 .sm-transition {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    z-index: 100;
  }

  .sm-transition--black {
    background: var(--main-black);
  }

  .sm-transition--main {
    background: var(--main-color);
  }
</style>