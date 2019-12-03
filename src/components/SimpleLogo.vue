<template>
  <div class="sm-logo__wrapper" :class="$mq">
    <router-link to="/">
      <img src="@/assets/logo_sebastianmartin.svg" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SimpleLogo'
}
</script>

<style scoped>
  .sm-logo__wrapper.small {
    background: var(--main-black);
    height: 50px;
    display: flex;
    padding: 20px;
  }

  .sm-logo__wrapper.screen {
    padding-top: 36px;
    padding-left: 30px;
  }
</style>