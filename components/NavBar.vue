<template>
  <div :class="{ drop: isMenuVisible }">
    <nav class="navbar">
      <nuxt-link to="/" class="logo-container" @click.native="closeMenu">
        <img
          class="logo"
          src="@/assets/images/witnet_logo.svg"
          alt=""
          aria-hidden="true"
        />
      </nuxt-link>
      <div class="responsive-nav">
        <LanguageSelector v-if="!isMenuVisible" class="responsive-lng" />
        <label
          v-if="!isMenuVisible"
          class="responsive-menu"
          @click="toggleMenu"
        >
          &#9776;
        </label>
        <label
          v-if="isMenuVisible"
          class="responsive-menu cross"
          @click="toggleMenu"
          >&#x2715;</label
        >
      </div>
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
          <li
            class="link"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            <a class="tab" href="https://github.com/witnet" target="_blank">
              <!-- FIXME(#62): Change icon color on hover -->
              <img
                v-if="hover"
                class="social"
                :src="require('@/assets/images/github.svg')"
                :alt="$t('nav_bar.social_image_alt')"
              />
              <img
                v-else
                class="social"
                :src="require('@/assets/images/github.svg')"
                :alt="$t('nav_bar.social_image_alt')"
              />
            </a>
          </li>
          <LanguageSelector class="language-component" />
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
  .responsive-nav {
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
      font-size: 1.12rem;
      display: flex;
      color: $black;
      align-items: center;
      text-decoration: none;
      padding: 24px 32px;
      .social {
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
    .language-component {
      display: none;
    }
    .responsive-nav {
      display: flex;
      position: absolute;
      top: 4px;
      right: 10px;
      align-items: center;
      .responsive-menu {
        margin-left: 8px;
        color: $black;
        font-size: 34px;
        cursor: pointer;
        &.cross {
          font-size: 38px;
        }
      }
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
      padding-top: 14vh;
      &.visible {
        display: flex;
        flex-direction: column;
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
