<template>
    <div>
      <mq-layout mq="small" class="sm-home" :class="$mq">
        <SimpleLogo />
        <LandingPagePortrait />
        <LandingPageSidebar />
        <SimpleNav />
      </mq-layout>
      <mq-layout mq="screen" class="sm-home" :class="$mq">
        <LandingPagePortrait />
        <LandingPageSidebar />
        <div class="sm-topbar">
          <SimpleLogo />
          <SimpleNav />
        </div>
      </mq-layout>
    </div>
</template>

<script>
// @ is an alias to /src
//https://greensock.com/forums/topic/19492-page-transition/
//https://greensock.com/forums/topic/19937-create-transition-from-smaller-image-to-fullscreen-on-new-page/

import SimpleLogo from '../components/SimpleLogo';
import SimpleNav from '../components/SimpleNav';
import LandingPagePortrait from '../components/LandingPagePortrait';
import LandingPageSidebar from '../components/LandingPageSidebar';

export default {
  name: 'home',
  components: {
    SimpleLogo,
    SimpleNav,
    LandingPagePortrait,
    LandingPageSidebar
  },
  data(){
    return {
      showTransition: false
    }
  },
  mounted(){
    //this.showTransition = true;
  }
}
</script>

<style>
  .sm-home.small {
    display: flex;
    flex-flow: column;
  }

  .sm-home.screen {
    overflow: hidden;
    display: flex;
    position: relative;
    align-items: stretch;
    height: 95vh;
    background: var(--main-black);
    justify-content: flex-end;
  }

  .sm-topbar {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 6;
  }

</style>
