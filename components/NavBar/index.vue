<template>
  <nav
    class="nav-bar d-flex justify-center align-center"
    :class="{ light, expanded, 'flex-column col-reverse': isXs }"
    v-if="mounted"
    ref="navbar"
  >
    <div class="nav-menu" :class="{ light }">
      <div class="nav-menu__button" v-for="option in navOptions" :key="option.name">
        <NavBarButton :name="option.icon" :selected="route.path === option.path" :light="light" @click="goTo(option.path)"/>
      </div>
      <!-- <div class="nav-menu__button">
        <NavBarButton "  :light="light" @click="goTo('/')" />
      </div>
    <div class="nav-menu__button">
        <NavBarButton name="carbon:user-profile" :light="light" @click="goTo('/philosophy')"/>
      </div>
      <div class="nav-menu__button">
        <NavBarButton name="carbon:workspace" :light="light" @click="goTo('/portfolio')"/>
      </div>
      <div class="nav-menu__button">
        <NavBarButton name="carbon:email" :light="light" @click="goTo('/contact')"/>
      </div> -->
    </div>
    <div
      class="nav-tab d-flex justify-center align-center"
      style="position: relative"
      :class="{ light, clickable: !expanded }"
      @click="expanded = !expanded"
    >
      <Icon
        :name="isXs ? 'mdi:chevron-up' : 'mdi:chevron-right'"
        :color="light ? getColor('mustard') : 'white'"
        :size="isXs ? '45px' : '48px'"
        style="position: absolute; margin: auto"
        class="tab-icon"
        :class="{ expanded }"
      />
    </div>
  </nav>
</template>

<script setup>
import { useBreakpoint } from "~/composables/breakpoint";
import {onClickOutside} from '@vueuse/core'

const { isXs } = useBreakpoint();
const { getColor, light } = useColor();

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
})

const expanded = ref(false);

const goTo = (path) => {
  expanded.value = false;
  navigateTo(path);
};

const navbar = ref(null);

onClickOutside(navbar, () => {
  expanded.value = false;
})

const route = useRoute();

const navOptions = [
  {
    name: "Home",
    icon: "carbon:home",
    path: "/",
  },
  {
    name: "Philosophy",
    icon: "carbon:user-profile",
    path: "/philosophy",
  },
  {
    name: "Portfolio",
    icon: "carbon:workspace",
    path: "/portfolio",
  },  
  {
    name: "Contact",
    icon: "carbon:email",
    path: "/contact",
    }
]
</script>

<style lang="scss" scoped>
$nav-width-desktop: 48px;
$tab-width-desktop: 24px;

.nav-bar {
  z-index: 10;
  position: fixed;
  left: 0;

  bottom: 0;
  right: 0;
  margin: auto;

  @include breakpoint(small) {
    top: 0;
    right: unset;
  }
  transition: transform 0.2s;

  transform: translateY(calc(calcDimension(46px, true, false)));
  &.expanded {
     transform: translateY(0);
  }

  @include breakpoint(small) {
    transform: translateX(calc(-1 * $nav-width-desktop));
    &.expanded {
     
      transform: translateX(0);
    }
  }

  .nav-menu,
  .nav-tab {
    background-color: $brand-yellow;
    &.light {
      background-color: white !important;
    }
  }

  .nav-tab {
    height: 20px;

    @include breakpoint(small) {
      height: calcDimension(165px, false, false);
    }

    width: 69px;
    @include breakpoint(small) {
      width: $tab-width-desktop;
    }

    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    @include breakpoint(small) {
      border-top-left-radius: unset;
      border-top-right-radius: 16.75px;
      border-bottom-right-radius: 16.75px;
    }

    cursor: pointer;

    .tab-icon {
      transition: transform 0.2s;
      transform: rotate(0deg);
      &.expanded {
        transform: rotate(180deg);
      }
    }
  }

  .nav-menu {
    height: calcDimension(46px, true, false);
    max-height: calcDimension(46px, true, false);
    @include breakpoint(small) {
      height: calcDimension(507.27px, false, false);
      max-height: calcDimension(507.27px, false, false);
    }

    width: 100vw;
    @include breakpoint(small) {
      width: $nav-width-desktop;
    }

    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    @include breakpoint(small) {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    display: flex;

    flex-direction: row;
    @include breakpoint(small) {
      flex-direction: column;
    }

    .nav-menu__button {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      padding: calcDimension(8px, true, false);
      @include breakpoint(small) {
        padding: 12px;
      }
    }
  }
}
</style>
<script>
export default {
  name: "NavBar",
};
</script>
