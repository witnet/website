<template lang="pug">
  header
    router-link(to='/')
      h1 Witnet
    menu
      ul
        li
          router-link(to='faq') FAQ
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';

  @Component({})
  export default class HeaderComponent extends Vue {

  }
</script>

<style scoped lang="stylus">

</style>