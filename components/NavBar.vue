<template>
  <div :class="{ drop: isMenuVisible }">
    <nav class="navbar">
      <nuxt-link to="/" class="logo-container" @click.native="closeMenu">
        <img class="logo" href="#" alt="Witnet logo" />
      </nuxt-link>
      <label class="responsive-menu" @click="toggleMenu">&#9776;</label>
      <transition name="dropdown" class="dropdown">
        <ul class="tab-container" :class="{ visible: isMenuVisible }">
          <li class="link">
            <nuxt-link to="/about" class="tab" @click.native="closeMenu">
              <span class="slash">/</span>oracle
            </nuxt-link>
          </li>
          <li class="link">
            <nuxt-link to="/#participate" class="tab" @click.native="closeMenu">
              <span class="slash">/</span>token
            </nuxt-link>
          </li>
          <li class="link">
            <nuxt-link to="/#participate" class="tab" @click.native="closeMenu">
              <span class="slash">/</span>ecosystem
            </nuxt-link>
          </li>
          <li class="link">
            <nuxt-link to="/#participate" class="tab" @click.native="closeMenu">
              <span class="slash">/</span>blog
            </nuxt-link>
          </li>
          <li @mouseover="hover = true" @mouseleave="hover = false">
            <a class="tab" href="https://github.com/witnet" target="_blank">
              <img v-if="hover" class="social" src="/" alt="github-logo" />
              <img v-else class="social" src="/" alt="github-logo" />
            </a>
          </li>
          <!-- TODO: ADD LANGUAGE COMPONENT -->
          <!-- <li>
            <div ref="button" class="language-btn" @click="displayDropDown">
              <p class="text">Language</p>
              <img class="arrow" src="/" alt="drop-down-arrow" />
            </div>
            <transition tag="div" class="smooth-in" name="smooth-in">
              <div
                v-if="displayBox"
                v-closable="{ exclude: ['button'], handler: 'displayDropDown' }"
                class="drop-down"
              >
                <button class="drop-down-item" @click="changeLanguage('en')">
                  English
                </button>
                <button class="drop-down-item" @click="changeLanguage('ch')">
                  Chinese
                </button>
              </div>
            </transition>
          </li> -->
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      displayBox: false,
      isMenuVisible: false,
      items: ['chinese', 'english'],
    }
  },
  methods: {
    closeMenu() {
      this.isMenuVisible = false
    },
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible
    },
    displayDropDown() {
      this.displayBox = !this.displayBox
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang
      this.displayBox = !this.displayBox
    },
    onClose() {
      this.active = false
    },
  },
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  height: 10vh;
  justify-content: space-between;
  .logo-container {
    display: flex;
    align-items: center;
    text-decoration: none;
    .logo {
      width: 80px;
    }
  }
  .responsive-menu {
    color: $white;
    display: none;
    font-size: 34px;
  }
  .tab-container {
    list-style: none;
    display: flex;
    align-items: center;
    & .visible {
      display: block;
    }
    .tab {
      font-size: 1.12rem;
      display: flex;
      color: $white;
      align-items: center;
      text-decoration: none;
      padding: 24px 32px;
      .social {
        width: 20px;
        margin: auto 8px;
      }
      .slash {
        color: $green-1;
      }
      &:hover {
        color: $green-1;
      }
    }
    .language-btn {
      //until we have translations
      display: none;
      //
      display: flex;
      padding: 0 8px;
      height: 30px;
      margin-right: 1vw;
      align-items: center;
      text-justify: center;
      border: 1px solid $green-1;
      color: $green-1;
      cursor: pointer;
      &:active {
        outline: none;
      }
      &:hover {
        opacity: 0.75;
      }
      .arrow {
        padding-left: 8px;
        width: 8px;
      }
    }
    .drop-down {
      position: absolute;
      display: block;
      width: 100px;
      // margin-top: 16px;
      flex-direction: column;
      & .drop-down-item {
        cursor: pointer;
        border: none;
        background-color: none;
        color: $white;
        padding: 8px;
        border-bottom: 1px solid $white;
        &:hover {
          opacity: 0.75;
        }
        &:active {
          box-shadow: none;
          outline: none;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .drop {
    position: fixed;
    top: 0;
    overflow: hidden;
    height: 100%;
    z-index: 15;
    overflow-y: hidden;
  }
  .navbar {
    background-color: $blue-5;
    display: block;
    position: relative;
    .logo-container {
      .logo {
        margin: 10px;
        width: 70px;
      }
    }
    .responsive-menu {
      display: block;
      cursor: pointer;
      position: absolute;
      top: 4px;
      right: 10px;
    }
    .tab-container {
      background-color: $blue-5;
      list-style: none;
      display: none;
      text-align: center;
      height: 100vh;
      width: 100vw;
      padding: 0;
      margin: 0;
      &.visible {
        display: block;
      }
      .tab {
        border-bottom: 1px solid $white;
        display: block;
        color: $white;
        align-items: center;
        text-decoration: none;
        padding: 24px 32px;
        .social {
          display: none;
        }
      }
      .language-btn {
        display: none;
        color: $white;
        justify-content: space-between;
        margin: 16px 50px 0 50px;
        border: none;
        border-bottom: 1px solid $white;
        &:hover {
          color: $green-1;
        }
        .arrow {
          display: block;
        }
      }
      .drop-down {
        position: relative;
        border-top: none;
        margin: 0 auto;
        padding: 0;
        width: 275px;
        .drop-down-item {
          border-bottom: 1px solid $white;
          padding: 10px;
          text-align: left;
        }
      }
    }
  }
}
</style>
