<template>
  <div id="app">
    <layout />
    <notifications position="top right" />
  </div>
</template>

<script>
import Layout from './components/layouts/Layout.vue';
export default {
  name: 'HelloWorld',
  components: {
    Layout
  }
}
</script>