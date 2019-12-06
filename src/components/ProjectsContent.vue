<template>
  <div class="sm-projects__wrapper" :class="$mq">
    <div class="sm-projects__nav">
      <p @click="setFilter('all')" class="sm-projects__filter" :class="{'active' : filter === ''}">Alle</p>
      <p @click="setFilter('full')" class="sm-projects__filter" :class="{'active' : filter === 'full'}">Komplettprojekte</p>
      <p @click="setFilter('code')" class="sm-projects__filter" :class="{'active' : filter === 'code'}">Webentwicklung</p>
      <p @click="setFilter('design')" class="sm-projects__filter" :class="{'active' : filter === 'design'}">Webdesign</p>
    </div>
    <div class="sm-projects__grid">
      <div v-for="item in filteredProjects" :key="item.id" class="sm-projects__card">
        <router-link :to="itemLink(item)">
          <div class="sm-projects__imgwrapper">
            <img :src="item.preview_image.src" alt="" class="sm-projects__img">
          </div>
          <p class="sm-projects__title">{{item.client}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {loadAllData as loadExternalData }  from '@/data/loadDataFromPrismic.js';

export default {
  name: 'ProjectsContent',
  data(){
    return {
      projects: [],
      filter: ''
    }
  },
  computed:{
    filteredProjects(){
      if (this.filter != '') {
        return this.projects.filter(item => item.categories[0] === this.filter);
      } else {
        return this.projects;
      }
    }
  },
  mounted(){
   this.loadData();
  },
  methods: {
    loadData(){
      loadExternalData(this.$prismic).then(res => {
        console.log(res);
        this.projects = res;
      })
    },
    setFilter(target){
      if (target === 'all') {
        this.filter = ''
      } else {
        this.filter = target;
      }
    },
    itemLink(item){
      return `/projects/${item.id}`
    }
  }
}
</script>

<style scoped>
/* Overall styles */
  .sm-projects__wrapper {
    z-index: 1;
    position: relative;
    flex-basis: 62%;
    padding: 200px 60px 0 80px;
    background-color: var(--main-color);
  }

  .sm-projects__title {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
    line-height: 110%;
    color: var(--light-grey);
    margin-top: 0;
  }

  .sm-projects__nav {
    margin-bottom: 32px;
  }

  .sm-projects__filter {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 1.6rem;
    text-transform: uppercase;
    line-height: 110%;
    cursor: pointer;
    transition: color 0.4s ease-in-out;
  }

  .sm-projects__filter.active {
    color: var(--light-grey);
  }

  .sm-projects__filter:not(:last-child) {
    margin-right: 44px;
  }

  .flip-list-move {
    transition: transform 1s;
  }

  .sm-projects__card {
    cursor: pointer;
  }

  .sm-projects__imgwrapper {
    overflow: hidden;
    margin-bottom: 8px;
  }

  /* Large Screens */
  .screen .sm-projects__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 22px;
    grid-row-gap: 40px;
  }

  .screen .sm-projects__nav p{
    display: inline;
  }

  .screen .sm-projects__imgwrapper {
    height: 168px;
  }

  .screen .sm-projects__img {
    height: 100%;
    width: auto;
  }

  /* Small Screens */

  .sm-projects__wrapper.small {
    padding: 16px;
    flex-grow: 1;
  }

  .small .sm-projects__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
    grid-gap: 16px;
  }

  .small .sm-projects__nav {
    display: flex;
    flex-flow: column;
  }

  .small .sm-projects__imgwrapper {
    max-height: 240px;
  }

  .small .sm-projects__img {
    height: 100%;
  }
</style>