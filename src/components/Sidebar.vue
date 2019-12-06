<template>
  <div class="sm-sidebar" :class="$mq">
    <h1 class="sm-headline--main">
    Sebastian Martin,
    <br><span class="red">selbstständiger <br>Webentwickler</span>
    <br> aus München.</h1>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
  .sm-sidebar.screen {
    display: flex;
    flex-flow: column;
    background: var(--main-black);
    background-image: url('../assets/background_test.png');
    background-size: cover;
    padding: 32px;
    flex-basis: 38%;
    min-width: 38%;
    justify-content: flex-end;
  }

  .sm-headline--main {
    font-family: 'Open Sans', sans-serif;
    font-size: 3.5rem;
    line-height: 110%;
    font-weight: 400;
    color: var(--light-grey);
  }
</style>