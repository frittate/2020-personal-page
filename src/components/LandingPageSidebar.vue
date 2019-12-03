<template>
  <div class="sm-content" :class="$mq">
    <h2 class="sm-headline--big">Ha<br>llo<span class="red">.</span></h2>
    <h1 class="sm-headline--main">
    Ich bin Sebastian, 
    <br><span class="red">selbstständiger <br>Webentwickler</span>
    <br> aus München.</h1>
  </div>
</template>

<script>
export default {
  name: 'LandingPageSidebar'
}
</script>

<style scoped>
  .sm-content {
    z-index: 1;
    position: relative;
  }

  .sm-content.screen {
    display: flex;
    flex-flow: column;
    background: rgba(255, 255, 255, 0.4);
    padding: 32px;
    flex-basis: 38%;
    justify-content: flex-end;
  }

  .sm-headline--big {
    font-family: 'Teko', sans-serif;
    font-size: 20rem;
    text-transform: uppercase;
    line-height: 74%;
    color: var(--light-grey);
    margin: 0;
    margin-top: 48px;
  }

  .small .sm-headline--big {
    font-family: 'Teko', sans-serif;
    font-size: 13.4rem;
  }

  .sm-content.small {
    background: var(--main-black);
    padding: 16px;
  }



  .sm-headline--main {
    font-family: 'Open Sans', sans-serif;
    font-size: 3.5rem;
    line-height: 110%;
    font-weight: 400;
    color: var(--light-grey);
  }
</style>