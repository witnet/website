<template>
  <aside v-if="!closed" class="testnet">
    <div class="content">
      <p>
        <b>The Witnet Testnet Incentive Program is live</b>: 25m WIT tokens and
        $30k DAI up for grabs!
      </p>
      <a href="//testnet.witnet.io/join" target="_blank">Join now</a>
    </div>
    <span class="close" @click="close">+</span>
  </aside>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      closed: false,
    }
  },
  methods: {
    close() {
      this.closed = true
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/colors.scss';

aside.testnet {
  background: $purple;
  padding: 15px 0;
  .content {
    padding: 0 20px;
    text-align: center;
    p,
    a {
      color: $white;
      display: inline-block;
    }
    a {
      border: 1px solid $white;
      border-radius: 4px;
      font-size: 0.9em;
      font-weight: bold;
      margin-left: 25px;
      padding: 10px 15px;
      text-decoration: none;
      text-transform: uppercase;
      transition: all 0.1s ease;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  span.close {
    color: $white;
    cursor: pointer;
    font-weight: 100;
    font-size: 1.5em;
    position: absolute;
    right: 10px;
    top: 5px;
    transform: rotate(45deg);
  }
}
</style>
