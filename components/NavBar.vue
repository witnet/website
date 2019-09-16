<template>
  <div class="top">
    <nav class="navbar">
      <nuxt-link to="/" class="logo-container" @click.native="closeMenu">
        <img src="~/assets/logo.svg" alt="the witnet protocol" class="logo" />
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
            <nuxt-link to="/participate" class="tab" @click.native="closeMenu">
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
            <div class="language-btn" @click="displayDropDown">
              Language
              <img
                class="arrow"
                src="~/assets/dropdown-arrow.svg"
                alt="drop-down-arrow"
              />
            </div>
            <transition tag="div" class="smooth-in" name="smooth-in">
              <div v-if="displayBox" class="drop-down">
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

  .logo {
    margin: 40px 32px;
    width: 250px;
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
      background-color: $purple-1;
      color: rgb(61, 61, 61);
      border: none;
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

    .smooth-in-move {
      transition: all 600ms ease-in-out 50ms;
    }

    .smooth-in-enter-active {
      transition: all 400ms ease-out;
    }

    .smooth-in-leave-active {
      transition: all 200ms ease-in;
      position: absolute;
      z-index: 0;
    }

    .smooth-in-enter,
    .smooth-in-leave-to {
      opacity: 0;
    }

    .drop-down {
      position: absolute;
      display: block;
      margin-top: 16px;
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
  .dropdown {
    &-enter,
    &-leave-to {
      opacity: 0;
    }

    &-leave,
    &-enter-to {
      opacity: 1;
    }

    &-enter-active,
    &-leave-active {
      width: 100%;
      transition: opacity 200ms ease-in-out;
    }

    &-enter-active {
      transition-delay: 100ms;
    }
  }
}

@media screen and (max-width: 1200px) {
  .navbar {
    display: block;
    position: relative;

    .logo {
      margin: 20px 5px;
      width: 250px;
    }

    .label {
      margin: 14px 0;
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
        display: flex;
        justify-content: center;
        padding: 24px 32px;
        border-bottom: 1px solid rgba(61, 61, 61, 0.233);
        &:hover {
          color: $purple;
        }
        .arrow {
          display: none;
        }
      }

      .drop-down {
        position: relative;
        margin: 0px;
        padding: 20px;

        .drop-down-item {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
