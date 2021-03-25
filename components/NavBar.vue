<template>
  <div :class="{ drop: isMenuVisible }">
    <nav class="navbar">
      <nuxt-link to="/" class="logo-container" @click.native="handleClick">
        <img
          class="logo"
          src="@/assets/images/witnet_logo.svg"
          alt=""
          aria-hidden="true"
        />
      </nuxt-link>
      <div class="responsive-nav">
        <!-- TODO: FIX open selector -->
        <LanguageSelector v-if="!isMenuVisible" />
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
            <nuxt-link
              :to="{ path: localePath('/'), hash: '#oracle' }"
              class="tab"
              @click.native="handleClick('oracle')"
            >
              <span class="slash">/</span>{{ $t('nav_bar.route.oracle') }}
            </nuxt-link>
          </li>
          <li class="link">
            <nuxt-link
              :to="{ path: localePath('/'), hash: '#token' }"
              class="tab"
              @click.native="handleClick('token')"
            >
              <span class="slash">/</span>{{ $t('nav_bar.route.token') }}
            </nuxt-link>
          </li>
          <li class="link">
            <nuxt-link
              :to="{ path: localePath('/'), hash: '#ecosystem' }"
              class="tab"
              @click.native="handleClick('ecosystem')"
            >
              <span class="slash">/</span>{{ $t('nav_bar.route.ecosystem') }}
            </nuxt-link>
          </li>
          <li class="link">
            <nuxt-link
              :to="{ path: localePath('/'), hash: '#participate' }"
              class="tab"
              @click.native="handleClick('participate')"
            >
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
                :src="require('@/assets/images/github-hover.svg')"
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
  watch: {
    isMenuVisible(val, oldVal) {
      if (val !== oldVal) {
        document.getElementsByTagName('body')[0].style.overflow = this
          .isMenuVisible
          ? 'hidden'
          : 'auto'
      }
    },
  },
  methods: {
    handleClick(anchorId) {
      this.isMenuVisible = false
      if (this.$route.hash) {
        const anchor = document.querySelector(`#${anchorId}`)
        if (anchor) {
          window.scrollTo({
            top: anchor.getBoundingClientRect().top + window.pageYOffset,
          })
        }
      }
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
    width: fit-content;
    .logo {
      user-select: none;
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
        width: 25px;
        user-select: none;
      }
      .slash {
        color: $green-1;
      }
      &:hover {
        color: $green-1;
        .slash {
          // color: $black;
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
    width: 100%;
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
        user-select: none;

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
      width: 100vw;
      height: 100vh;
      padding: 0;
      margin: 0;
      box-shadow: 0 5px 10px -2px $alpha-purple;

      &.visible {
        display: flex;
        flex-direction: column;
      }

      .tab {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .link {
        width: 100%;
        border-bottom: 1px solid #e6e6f5;
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
