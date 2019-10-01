<template>
  <div>
    <textarea v-model="formula" cols="30" rows="10"></textarea>
    <vue-mathjax :formula="formula"></vue-mathjax>
  </div>
</template>

<script>
import { VueMathjax } from 'vue-mathjax'
export default {
  name: 'HelloWorld',
  components: {
    'vue-mathjax': VueMathjax,
  },
  data() {
    return {
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
      msg: 'Welcome to Your Vue.js App',
    }
  },
}
</script>
