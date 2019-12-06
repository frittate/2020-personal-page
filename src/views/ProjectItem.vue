<template>
  <div>
     <div>
    <mq-layout mq="small" class="sm-projects" :class="$mq">
      <SimpleLogo />
      <SimpleNav />
      <ProjectsItemContent :extData="projectDetails" :loading="loading"/>
    </mq-layout>

    <mq-layout mq="screen" class="sm-projects" :class="$mq">
      <ProjectsItemContent :extData="projectDetails" :loading="loading"/>
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
      projectDetails: {},
      loading: true
    }
  },
  mounted(){
    loadItem(this.$prismic, this.$route.params.id).then(res => {
      console.log('details', res);
      this.projectDetails = res;
      this.loading = false;
    })
  }
}
</script>

<style>

</style>