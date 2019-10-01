<template>
  <vue-mathjax :formula="formula"></vue-mathjax>
</template>

<script>
import { VueMathjax } from 'vue-mathjax'
export default {
  name: 'HelloWorld',
  components: {
    'vue-mathjax': VueMathjax,
  },
  props: {
    formula: String,
  },
}
</script>
