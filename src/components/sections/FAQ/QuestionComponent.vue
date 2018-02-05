<template lang="pug">
  li(v-bind:class="{open: isOpen}")
    header(@click="toggle")
      h3 {{question}}
    slot(name="answer")
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';

  @Component({
    props: {
      question: String,
      answer: String
    }
  })
  export default class QuestionComponent extends Vue {

    isOpen: boolean = false

    toggle (): void {
      this.isOpen = !this.isOpen
    }

  }
</script>

<style scoped lang="stylus">
  li
    position relative
    list-style-type none
    margin-bottom 30px
    background #FF
    box-shadow 0 2px 10px rgba(20,25,133,.1)
    &:not(.open)
      main
        display none
    &:before
      position absolute
      top -50px
      left -30px
      font-family "Titillium Web"
      font-size 5em
      font-weight 700
      content counter(questions)
      counter-increment questions
      background -webkit-linear-gradient(top, rgb(102,0,221) 0%, rgb(55,125,243) 100%)
      background linear-gradient(top, rgb(102,0,221) 0%, rgb(55,125,243) 100%)
      background-clip text
      -webkit-text-fill-color transparent
      z-index -1
    &:after
      content '+'
      position absolute
      right 0
      top -20px
      padding 30px 30px
      font-size 2em
      font-weight 700
      color #222834
      pointer-events none
    header
      padding 20px 40px
      cursor pointer
      h3
        font-size 1.3em
        font-weight 500
    main
      margin-top -15px
      padding 0 40px 15px 40px
      font-weight 300
      a[href], strong, b
        text-decoration none
        color inherit
        font-weight 600
    &.open
      background #222834
      color #FF
      &:after
        content '-'
        color #FF
      header
        h3
          font-weight 600
      main
        p
          font-size 1.2em
          color #FF
          opacity .9
</style>