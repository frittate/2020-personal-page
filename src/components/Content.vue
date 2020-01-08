<template>
   <div>
    <mq-layout mq="small" class="sm-content" :class="$mq">
      <SimpleLogo />
      <SimpleNav />
      <div class="sm-content__wrapper" :class="$mq">
        <slot name="content" />
      </div>
    </mq-layout>

    <mq-layout mq="screen" class="sm-content" :class="$mq">
      <div class="sm-content__wrapper" :class="$mq">
        <slot name="content" />
      </div>
      <Sidebar />
      <div class="sm-topbar">
        <SimpleLogo />
        <SimpleNav />
      </div>
    </mq-layout>
  </div>
</template>

<script>
import SimpleLogo from '../components/SimpleLogo';
import SimpleNav from '../components/SimpleNav';
//import ProjectsContent from '../components/ProjectsContent';
import Sidebar from '../components/Sidebar';

export default {
 name: 'Projects',
  components: {
    SimpleLogo,
    SimpleNav,
    Sidebar,
    //ProjectsContent
  }
}
</script>

<style>
  /* Media-independent Styles */

  .sm-topbar {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 6;
  }

  .sm-content__wrapper {
    z-index: 1;
    position: relative;
    flex-basis: 62%;
    padding: 200px 60px 0 80px;
    background-color: var(--main-color);
  }

  /* Large Screens */
    .sm-content.screen {
    overflow: hidden;
    display: flex;
    /* min-height: 1000px; */
    position: relative;
    height: 95vh;
  }

  /* Small Screens */
    .sm-content__wrapper.small {
    padding: 16px;
    flex-grow: 1;
  }

  .sm-content.small {
    display: flex;
    flex-flow: column;
    height: 100vh;
  }
</style>