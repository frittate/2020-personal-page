<template>
  <Content>
    <template v-slot:content>
      <projects-content />
    </template>
  </Content>
</template>

<script>
import Content from '../components/Content'
import ProjectsContent from '../components/ProjectsContent';

export default {
  name: 'Projects',
  components: {
    Content,
    ProjectsContent
  }
}
</script>
