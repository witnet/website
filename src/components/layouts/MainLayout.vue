<template lang="pug">
  main
    headerComponent
    section.main
      router-view
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';
  import {HeaderComponent} from '../index'

  @Component({
    components: {
      headerComponent: HeaderComponent
    }
  })
  export default class MainLayout extends Vue {

  }
</script>