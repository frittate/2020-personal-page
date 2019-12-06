<template>
  <div class="sm-nav__wrapper" :class="$mq">
    <router-link to="/about">Über mich</router-link>
    <router-link to="/projects">Projekte</router-link>
    <router-link to="/contanct">Kontakt</router-link>
  </div>
</template>

<script>
export default {
  name: 'SimpleNav',
}
</script>

<style scoped>
  .sm-nav__wrapper a {
    color: var(--light-grey);
    font-family: 'Open Sans';
    font-size: 1.8rem;
  }

  .sm-nav__wrapper a.router-link-exact-active,
  .sm-nav__wrapper a.router-link-active {
    color: var(--main-color);
  }

  .sm-nav__wrapper {
    display: flex;
  }

  .sm-nav__wrapper.screen {
    padding-top: 36px;
    padding-right: 30px;
  }

  .sm-nav__wrapper.screen a:not(:last-child){
    margin-right: 24px;
  }

  .sm-nav__wrapper.small{
    background: var(--main-black);
    flex-flow: column;
    padding-top: 48px;
    padding-left: 16px;
  }

  .sm-nav__wrapper.small a {
    margin-bottom: 48px;
    line-height: 110%;
  }
</style>