<template>
    <div class="sm-p-item__wrapper" :class="$mq">
      <div v-if="loading">
        <h1 class="sm-p-item__headline">...</h1>
      </div>
      <div v-else>
        <router-link to="/projects" class="sm-p-item__back">Zur Projektübersicht</router-link>
        <h1 class="sm-p-item__headline">{{extData.client}}</h1>
        <h2 class="sm-p-item__category">{{categories}}</h2>
        <p class="sm-p-item__description">
          {{extData.description}}
        </p>
        <ul class="sm-p-item__tags">
          <li v-for="item in extData.technologies" :key="item.id">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProjectsItemContent',
  props: {
    extData: Object,
    loading: Boolean
  },
  computed: {
    categories(){
      if (this.extData.categories.includes('full')) {
        return 'Projektmanagement | Webdesign | Programmierung'
      } else if(this.extData.categories.includes('code')) {
        return 'Programmierung'
      } else if(this.extData.categories.includes('design')) {
        return 'Webdesign'
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>
/* Overall Styles */
  .sm-p-item__wrapper {
    z-index: 1;
    position: relative;
    flex-basis: 62%;
    padding: 60px 60px 0 80px;
    background-color: var(--main-color);
  }

  .sm-p-item__wrapper > div:first-child {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
  }

  .sm-p-item__back {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: var(--light-grey);
    margin-bottom: 40px;
  }

  .sm-p-item__headline {
    font-size: 2.4rem;
    text-transform: uppercase;
    color: var(--main-black);
    margin-bottom: 12px;
    font-weight: bold;
  }

  .sm-p-item__category {
    font-size: 1.4rem;
    padding: 8px 12px;
    background: var(--main-black);
    border-radius: 3px;
    color: var(--light-grey);
    font-weight: normal;
    margin: 0;
    margin-bottom: 70px;
  }

  .sm-p-item__description {
    font-size: 1.4rem;
    line-height: 173%;
    max-width: 360px;
    color: var(--light-grey);
    margin-bottom: 34px;
  }

  .sm-p-item__tags {
    list-style-type: none;
    display: inline;
    margin: 0;
    padding: 0;
    max-width: 600px;
  }

  .sm-p-item__tags li{
    border: 1px solid var(--main-black);
    border-radius: 3px;
    padding: 5px 5px 6px 6px;
    font-size: 1.4rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    margin-bottom: 12px;
  }

  .sm-p-item__tags li:not(:last-child) {
    margin-right: 14px;
  }
  
  /* Small Screens */

  .sm-p-item__wrapper.small {
    padding: 32px 16px 120px 16px;
    flex-grow: 1;
  }

  .small .sm-p-item__category {
    margin-bottom: 34px;
  }

</style>