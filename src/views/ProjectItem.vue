<template>
  <div>
     <div>
    <!-- <mq-layout mq="small" class="sm-projects" :class="$mq">
      <SimpleLogo />
      <SimpleNav />
      <ProjectsContent />
    </mq-layout> -->

    <mq-layout mq="screen" class="sm-projects" :class="$mq">
      <ProjectsItemContent :extData="projectDetails"/>
      <Sidebar />
      <div class="sm-topbar">
        <SimpleLogo />
        <SimpleNav />
      </div>
    </mq-layout>
  </div>
  </div>
</template>

<script>
import SimpleLogo from '../components/SimpleLogo';
import SimpleNav from '../components/SimpleNav';
import Sidebar from '../components/Sidebar';
import ProjectsItemContent from '../components/ProjectsItemContent'

import {loadSingleData as loadItem} from '@/data/loadDataFromPrismic.js';

export default {
  name: 'ProjectItem',
  components: {
    SimpleLogo,
    SimpleNav,
    Sidebar,
    ProjectsItemContent
  },
  data(){
    return {
      projectDetails: {}
    }
  },
  mounted(){
    loadItem(this.$prismic, this.$route.params.id).then(res => {
      console.log('details', res);
      this.projectDetails = res;
    })
  }
}
</script>

<style>

</style>