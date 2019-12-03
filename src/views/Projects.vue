<template>
   <div>
    <mq-layout mq="small" class="sm-projects" :class="$mq">
      <SimpleLogo />
      <SimpleNav />
      <ProjectsContent />
    </mq-layout>

    <mq-layout mq="screen" class="sm-projects" :class="$mq">
      <ProjectsContent />
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
import ProjectsContent from '../components/ProjectsContent';
import Sidebar from '../components/Sidebar';

export default {
  name: 'Projects',
  components: {
    SimpleLogo,
    SimpleNav,
    Sidebar,
    ProjectsContent
  }
}
</script>

<style>
 .sm-projects.small {
    display: flex;
    flex-flow: column;
    height: 100vh;
  }

  .sm-projects.screen {
    overflow: hidden;
    display: flex;
    min-height: 1000px;
    position: relative;
    height: 95vh;
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