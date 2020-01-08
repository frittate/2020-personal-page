<template>
  <Content>
    <template v-slot:content>
      <ProjectsItemContent :extData="projectDetails" :loading="loading"/>
    </template>
  </Content>
</template>

<script>
import Content from '../components/Content'
import ProjectsItemContent from '../components/ProjectsItemContent'

import {loadSingleData as loadItem} from '@/data/loadDataFromPrismic.js';

export default {
  name: 'ProjectItem',
  components: {
    Content,
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