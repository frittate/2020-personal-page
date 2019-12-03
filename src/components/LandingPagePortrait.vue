<template>
  <div class="sm-portrait__wrapper" :class="$mq">
    <img src="@/assets/main_portrait.jpg" alt="" class="sm-portrait">
  </div>
</template>

<script>
export default {
  name: 'LandingPagePortrait',
}
</script>

<style scoped>
.sm-portrait__wrapper {
  margin-bottom: -5px;
}

.sm-portrait__wrapper.screen {
  position: absolute;
  top: 0;
  left: 0;
}

.sm-portrait {
  width: 100%;
}

.small .sm-portrait{
  width: 135%;
}

</style>