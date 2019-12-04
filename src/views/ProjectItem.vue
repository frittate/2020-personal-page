<template>
  <p>{{this.$route.params.id}}</p>
</template>

<script>
import {loadSingleData as loadItem} from '@/data/loadDataFromPrismic.js';

export default {
  name: 'ProjectItem',
  mounted(){
    loadItem(this.$prismic, this.$route.params.id).then(res => {
      console.log(res);
    })
  }
}
</script>

<style>

</style>