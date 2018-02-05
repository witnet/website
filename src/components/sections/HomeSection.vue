<template lang="pug">
  main
    heroComponent
    descriptionComponent
    intriguedComponent
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';
  import {DescriptionComponent, HeroComponent, IntriguedComponent} from './landing';

  @Component({
    components: {
      heroComponent: HeroComponent,
      descriptionComponent: DescriptionComponent,
      intriguedComponent: IntriguedComponent
    }
  })
  export default class HomeSection extends Vue {

  }
</script>

<style scoped lang="stylus"></style>