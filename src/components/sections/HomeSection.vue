<template lang="pug">
  main
    heroComponent
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';
  import {HeroComponent} from "./landing";

  @Component({
    components: {
      heroComponent: HeroComponent
    }
  })
  export default class HomeSection extends Vue {

  }
</script>

<style scoped lang="stylus"></style>