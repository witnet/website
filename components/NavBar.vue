<template>
  <div :class="{ drop: isMenuVisible }">
    <nav class="navbar">
      <nuxt-link to="/" class="logo-container" @click.native="closeMenu">
        <img
          class="logo"
          src="@/assets/svg/witnet_logo.svg"
          alt="Witnet logo"
        />
      </nuxt-link>
      <label class="responsive-menu" @click="toggleMenu">&#9776;</label>
      <transition name="dropdown" class="dropdown">
        <ul class="tab-container" :class="{ visible: isMenuVisible }">
          <li class="link">
            <nuxt-link to="/about" class="tab" @click.native="closeMenu">
              <span class="slash">/</span>{{ $t('nav_bar.route.oracle') }}
            </nuxt-link>
          </li>
          <li class="link">
            <nuxt-link to="/#participate" class="tab" @click.native="closeMenu">
              <span class="slash">/</span>{{ $t('nav_bar.route.token') }}
            </nuxt-link>
          </li>
          <li class="link">
            <nuxt-link to="/#participate" class="tab" @click.native="closeMenu">
              <span class="slash">/</span>{{ $t('nav_bar.route.ecosystem') }}
            </nuxt-link>
          </li>
          <li class="link">
            <nuxt-link to="/#participate" class="tab" @click.native="closeMenu">
              <span class="slash">/</span>{{ $t('nav_bar.route.blog') }}
            </nuxt-link>
          </li>
          <li @mouseover="hover = true" @mouseleave="hover = false">
            <a class="tab" href="https://github.com/witnet" target="_blank">
              <img
                v-if="hover"
                class="social"
                src="/"
                :alt="$t('nav_bar.social_image_alt')"
              />
              <img
                v-else
                class="social"
                src="/"
                :alt="$t('nav_bar.social_image_alt')"
              />
            </a>
          </li>
          <!-- TODO: ADD LANGUAGE COMPONENT -->
          <LanguageSelector />
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector'

export default {
  components: {
    LanguageSelector,
  },
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
  padding: 0 15vw;
  background-color: $white;

  .logo-container {
    display: flex;
    align-items: center;
    text-decoration: none;
    .logo {
      height: 39px;
    }
  }
  .responsive-menu {
    color: $black;
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
      color: $black;
      align-items: center;
      text-decoration: none;
      padding: 24px 32px;
      .social {
        height: 23px;
        margin: auto 8px;
      }
      .slash {
        color: $green-1;
      }
      &:hover {
        color: $green-1;
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
    display: block;
    position: relative;
    padding: 0 0;
    .logo-container {
      .logo {
        margin: 10px;
        height: 39px;
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
      background-color: $white;
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
        border-bottom: 2px solid $blue-5;
        display: block;
        align-items: center;
        text-decoration: none;
        padding: 24px 32px;
        .social {
          display: none;
        }
      }
      .language-btn {
        display: none;
        justify-content: space-between;
        margin: 16px 50px 0 50px;
        border: none;
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
