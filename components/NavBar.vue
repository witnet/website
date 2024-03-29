<template>
  <div class="nav-container" :class="{ drop: isMenuVisible }">
    <nav class="navbar" :class="{ open: isMenuVisible }">
      <div class="menu-container">
        <h1>
          <a href="https://witnet.io/">
            <img
              class="logo"
              src="@/assets/images/witnet_logo.svg"
              alt="Witnet oracle"
            />
          </a>
        </h1>
        <label class="responsive-menu" @click="toggleMenu">
          <a class="target-burger" :class="{ visible: isMenuVisible }">
            <ul class="buns">
              <li class="bun"></li>
              <li class="bun"></li>
            </ul>
          </a>
        </label>
      </div>
      <transition name="dropdown" class="dropdown">
        <ul class="tab-container" :class="{ visible: isMenuVisible }">
          <li class="tab" @click="closeMenu">
            <InnerLink hash="oracle">
              <span class="slash">/</span>{{ $t('nav_bar.route.oracle') }}
            </InnerLink>
          </li>
          <li class="tab" @click="closeMenu">
            <InnerLink hash="coin">
              <span class="slash">/</span>{{ $t('nav_bar.route.token') }}
            </InnerLink>
          </li>
          <li class="tab" @click="closeMenu">
            <InnerLink hash="ecosystem">
              <span class="slash">/</span>{{ $t('nav_bar.route.ecosystem') }}
            </InnerLink>
          </li>
          <li class="tab" @click="closeMenu">
            <a :href="urls.medium" target="_blank">
              <span class="slash">/</span>{{ $t('nav_bar.route.blog') }}
            </a>
          </li>
          <li class="tab" @click="closeMenu">
            <a :href="urls.documentation" target="_blank">
              <Button class="btn" :font-size="14">{{
                $t('hero.buttons.build')
              }}</Button>
            </a>
          </li>
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script>
import { urls } from '../constants'

export default {
  data() {
    return {
      urls,
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
    onClose() {
      this.active = false
    },
  },
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1050px;
  margin: 0 auto;
  background-color: $white;
  .logo {
    height: 39px;
  }
  .responsive-menu {
    display: none;
  }
  .tab-container {
    list-style: none;
    display: flex;
    align-items: center;
    &.visible {
      background: white;
      display: block;
      padding: 0;
    }
    .tab {
      font-size: 1rem;
      font-weight: 600;
      display: flex;
      color: $darkest-blue;
      align-items: center;
      text-decoration: none;
      padding: 16px 24px;
      transition: color 0.1s ease;
      .btn {
        margin: 0;
      }
      .slash {
        color: $green-1;
      }

      &:hover {
        color: $green-1;
        .slash {
          color: $darkest-blue;
        }
      }
      &:last-child {
        padding-right: 0;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .navbar {
    &.open {
      height: 100vh;
      width: 100vw;
    }
    .logo {
      margin: 0;
    }
  }
  .drop {
    position: absolute;
  }
}

@media screen and (max-width: 950px) {
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
    .menu-container {
      display: flex;
      justify-content: space-between;
      padding: 16px 16px 0 16px;
    }
    .responsive-menu {
      font-size: 34px;
      cursor: pointer;
      width: 32px;
      display: flex;
      align-items: center;
    }
    .tab-container {
      list-style: none;
      display: none;
      text-align: center;
      height: 100vh;
      width: 100vw;
      margin: 0;
      cursor: pointer;
      &.visible {
        box-sizing: border-box;
        display: block;
        padding: 0;
        padding-top: 32px;
      }
      .tab {
        cursor: pointer;
        display: block;
        color: $darkest-blue;
        align-items: center;
        text-decoration: none;
        padding: 16px;
        .social {
          display: none;
        }
      }
    }
  }
}

.target-burger {
  display: block;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    opacity: opacity(0.45);
  }
  &.visible {
    ul.buns {
      width: 32px;
      height: 32px;
      li.bun {
        -webkit-transform: rotate(45deg) translateZ(0);
        transform: rotate(45deg) translateZ(0);
        &:last-child {
          -webkit-transform: rotate(-45deg) translateZ(0);
          transform: rotate(-45deg) translateZ(0);
        }
      }
    }
  }
  .buns {
    width: 32px;
    height: 32px;
    list-style: none;
    padding: 0;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1),
      color 1s cubic-bezier(0.23, 1, 0.32, 1);
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1),
      color 1s cubic-bezier(0.23, 1, 0.32, 1);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    color: $darkest-blue;
    .bun {
      width: 100%;
      height: 3px;
      background-color: $darkest-blue;
      position: absolute;
      top: 50%;
      margin-top: -0.75px;
      -webkit-transform: translateY(-3.75px) translateZ(0);
      transform: translateY(-3.75px) translateZ(0);
      -webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1),
        background-color 1s cubic-bezier(0.23, 1, 0.32, 1);
      transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1),
        background-color 1s cubic-bezier(0.23, 1, 0.32, 1);
      &:last-child {
        -webkit-transform: translateY(3.75px) translateZ(0);
        transform: translateY(3.75px) translateZ(0);
      }
    }
  }
}
</style>
