<template>
  <Content>
    <template v-slot:content>
      <h1>About</h1>
    </template>
  </Content>
</template>

<script>
import Content from '../components/Content'

export default {
  name: 'Projects',
  components: {
    Content,
  }
}
</script>