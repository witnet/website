<template lang="pug">
  main
    heroComponent
    descriptionComponent
    intriguedComponent
    extraComponent
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';
  import {DescriptionComponent, ExtraComponent, HeroComponent, IntriguedComponent} from './landing';

  @Component({
    components: {
      heroComponent: HeroComponent,
      descriptionComponent: DescriptionComponent,
      intriguedComponent: IntriguedComponent,
      extraComponent: ExtraComponent
    }
  })
  export default class HomeSection extends Vue {

  }
</script>

<style scoped lang="stylus"></style>