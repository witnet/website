<template lang="pug">
  main
    heroComponent
    descriptionComponent
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';
  import {DescriptionComponent, HeroComponent} from './landing';

  @Component({
    components: {
      heroComponent: HeroComponent,
      descriptionComponent: DescriptionComponent
    }
  })
  export default class HomeSection extends Vue {

  }
</script>

<style scoped lang="stylus"></style>