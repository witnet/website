<template>
  <div :class="{ drop: isMenuVisible }">
    <nav class="navbar">
      <nuxt-link to="/" class="logo-container" @click.native="closeMenu">
        <img src="~/assets/logo.svg" alt="the witnet protocol" class="logo" />
        <h1>the <span class="logo-span">Witnet</span> protocol</h1>
      </nuxt-link>
      <label class="label" @click="toggleMenu">&#9776;</label>
      <transition name="dropdown" class="dropdown">
        <ul class="tab-container" :class="{ visible: isMenuVisible }">
          <li>
            <nuxt-link to="/about" class="tab" @click.native="closeMenu">
              {{ this.$t('tab1') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#participate" class="tab" @click.native="closeMenu">
              {{ this.$t('tab2') }}
            </nuxt-link>
          </li>
          <li @mouseover="hover = true" @mouseleave="hover = false">
            <a class="tab" href="https://github.com/witnet" target="_blank">
              {{ this.$t('tab3') }}
              <img
                v-if="hover"
                class="social"
                src="~/assets/github-purple-logo.svg"
                alt="github-logo"
              />
              <img
                v-else
                class="social"
                src="~/assets/github-black-logo.svg"
                alt="github-logo"
              />
            </a>
          </li>
          <li>
            <div ref="button" class="language-btn" @click="displayDropDown">
              <p class="text">Language</p>
              <img
                class="arrow"
                src="~/assets/dropdown-arrow-purple.svg"
                alt="drop-down-arrow"
              />
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
          </li>
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
@import '@/styles/colors.scss';

.navbar {
  display: flex;
  padding: 8px;
  height: 10vh;
  justify-content: space-between;
  .logo-container {
    display: flex;
    align-items: center;
    text-decoration: none;
    h1 {
      font-size: 20px;
      font-weight: normal;
      color: rgb(61, 61, 61);
      margin-top: 24px;
    }
    .logo-span {
      color: $purple;
    }
    &:active &:hover {
      color: rgb(61, 61, 61);
    }
    .logo {
      margin: 8px 16px 0px 40px;
      width: 80px;
    }
  }

  .label {
    font-size: 26px;
    color: $grey-2;
    display: none;
  }

  .tab-container {
    list-style: none;
    display: flex;
    align-items: center;
    & .visible {
      display: block;
    }

    .tab {
      display: flex;
      color: rgb(61, 61, 61);
      align-items: center;
      text-decoration: none;
      padding: 24px 32px;

      .social {
        width: 20px;
        margin: auto 8px;
      }

      &:hover {
        color: $purple;
      }
    }

    .language-btn {
      font-size: 16px;
      padding: 0 8px;
      display: flex;
      height: 30px;
      margin-right: 1vw;
      align-items: center;
      text-justify: center;
      // background-color: $purple;
      border: 1px solid $purple;
      color: $purple;
      // border: none;
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
      display: flex;
      flex-direction: column;

      & .drop-down-item {
        background-color: transparent;
        font-size: 16px;
        cursor: pointer;
        border: none;
        background-color: none;
        color: rgb(61, 61, 61);
        padding: 8px;
        border-bottom: 1px solid rgb(61, 61, 61);

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
    overflow: hidden;
    height: 100%;
    background-color: white;
  }
  .navbar {
    display: block;
    position: relative;
    .logo-container {
      .logo {
        margin: 10px;
        width: 70px;
      }
      h1 {
        margin-left: 10px;
        margin-top: 20px;
        font-size: 20px;
      }
    }

    .label {
      margin: 8px;
      display: block;
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .tab-container {
      list-style: none;
      display: none;
      background-color: white;
      text-align: center;
      height: 100vh;
      width: 100vw;
      padding: 0px;
      margin: 0px;
      &.visible {
        display: block;
      }
      .tab {
        border-bottom: 1px solid rgba(61, 61, 61, 0.233);
        background-color: white;
        display: block;
        color: rgb(61, 61, 61);
        align-items: center;
        text-decoration: none;
        padding: 24px 32px;

        .social {
          display: none;
        }
      }

      .language-btn {
        background-color: white;
        color: rgb(61, 61, 61);
        display: flex;
        justify-content: space-between;
        margin: 16px 50px 0px 50px;
        border: none;
        border-bottom: 1px solid rgba(61, 61, 61, 0.233);
        &:hover {
          color: $purple;
        }
        .arrow {
          display: block;
        }
      }

      .drop-down {
        position: relative;
        border-top: none;
        margin: 0px auto;
        padding: 0px;
        width: 275px;

        .drop-down-item {
          border-bottom: 1px solid rgba(61, 61, 61, 0.233);
          padding: 10px;
          text-align: left;
        }
      }
    }
  }
}
</style>
