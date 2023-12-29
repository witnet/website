<template>
  <header class="navbar">
    <NuxtLink class="logo-link" to="/" rel="home"
      ><WitnetLogo class="logo"
    /></NuxtLink>
    <input id="side-menu" ref="checkbox" class="checkbox" type="checkbox" />
    <nav class="navbar-tabs">
      <ul class="navbar-links animated zoomIn">
        <div class="close-menu-container" @click="closeMenu"><CloseNav /></div>
        <li class="yellow">
          <NuxtLink class="link yellow" to="/build" rel="about">{{
            $t('build')
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/buy" rel="contact">{{
            $t('buy')
          }}</NuxtLink>
        </li>
        <li class="yellow">
          <NuxtLink class="link" to="/stake" rel="contact">{{
            $t('stake')
          }}</NuxtLink>
        </li>
        <li class="link language-select">
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
    <label ref="menu" for="side-menu" class="hamburguer-container">
      <Hamburger class="hamburguer" />
    </label>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import WitnetLogo from '@/assets/svg/witnet-logo.svg'
import Hamburger from '@/assets/svg/hamburguer.svg'
import CloseNav from '@/assets/svg/close-nav.svg'
const menu = ref()
const checkbox = ref()
const route = useRoute()
const routePath = computed(() => route.path)

function closeMenu() {
  menu.value.click()
}

watch(
  routePath,
  (_value) => {
    if ((checkbox.value as HTMLInputElement).checked) {
      closeMenu()
    }
  },
  { deep: true },
)
</script>

<style lang="scss" scoped>
.navbar {
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  top: -16px;
  z-index: 500;
  .logo-link {
    color: $white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      width: 200px;
      height: auto;
    }
  }
  .close-menu-container {
    display: none;
  }
  .checkbox {
    display: none;
  }
  .navbar-links {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    align-items: flex-start;
    justify-content: space-between;
    .link {
      padding: 0 16px;
      text-decoration: none;
      font-size: 16px;
      text-decoration: none;
      width: max-content;
      display: block;
      color: $white;
      &:hover {
        color: $grey;
      }
      &.language-select {
        padding: 16px;
        justify-self: flex-end;
        width: max-content;
        display: none;
      }
    }
  }
  .hamburguer-container {
    display: none;
    .hamburguer {
      width: 30px;
      height: auto;
    }
  }
}
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}

.animated {
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@media (max-width: 706px) {
  .navbar {
    .navbar-tabs {
      display: none;
      .navbar-links {
        height: 100vh;
      }
    }
    .checkbox:checked ~ .navbar-tabs {
      display: block;
    }
    .close-menu-container {
      display: none;
    }
    .hamburguer-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .yellow {
      background-color: $green;
    }
    .navbar-links {
      padding: 0;
      display: grid;
      grid-template-rows: repeat(4, max-content);
      grid-template-columns: 1fr;
      position: fixed;
      width: 100vw;
      z-index: 500;
      right: 0;
      left: 0;
      bottom: 0;
      gap: 0;
      background-color: $black;
      .link {
        padding: 8px 16px 8px 16px;
        width: 100%;
        &.language-select {
          display: block;
          padding: 0px;
          justify-self: flex-end;
        }
      }
      .close-menu-container {
        padding: 16px;
        display: flex;
        justify-content: flex-end;
      }
      li {
        height: max-content;
      }
    }
  }
}
</style>
