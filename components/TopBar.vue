<template>
  <header class="navbar">
    <div class="logo-link">
      <slot class="logo-link" name="logo"></slot>
    </div>
    <input id="side-menu" ref="checkbox" class="checkbox" type="checkbox" />
    <nav class="navbar-tabs">
      <ul class="navbar-links animated zoomIn">
        <div class="close-menu-container" @click="closeMenu">
          <CloseNavIcon />
        </div>
        <li
          v-for="link in navLinks"
          :key="link.key"
          class="nav-link"
          @click="closeMenu"
        >
          <slot :name="link.key" />
        </li>
        <li class="nav-link language-select">
          <client-only>
            <LanguageSwitcher />
          </client-only>
        </li>
      </ul>
    </nav>
    <label ref="menu" for="side-menu" class="hamburguer-container">
      <HamburgerIcon class="hamburguer" />
    </label>
  </header>
</template>

<script lang="ts" setup generic="T extends any">
import { ref } from 'vue'
import HamburgerIcon from '@/assets/svg/hamburguer.svg?component'
import CloseNavIcon from '@/assets/svg/close-nav.svg?component'
const menu = ref()
const checkbox = ref()
const route = useRoute()
const routePath = computed(() => route.path)

defineProps({
  navLinks: {
    type: Object as PropType<Array<{ key: string }>>,
    required: true,
  },
})

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

<style lang="scss">
.navbar {
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: -16px;
  z-index: 500;

  .logo-link {
    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
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
    .nav-link {
      padding: 0 16px;
      text-decoration: none;
      font-size: 16px;
      text-decoration: none;
      width: max-content;
      display: block;
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
      top: 0;
      gap: 0;
      .nav-link {
        padding: 8px 16px 8px 16px;
        width: 100%;
        &.language-select {
          display: block;
          padding: 0px;
          margin-right: 8px;
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
