<template>
  <nav
    class="nav-bar d-flex justify-center align-center"
    :class="{ light, expanded, 'flex-column col-reverse': isXs }"
  
    ref="navbar"
  >
    <div class="nav-menu" :class="{ light }">
      <div class="nav-menu__button" v-for="option in NAV_ITEMS" :key="option.name">
        <NavBarButton :name="option.icon" :text="option.name" :selected="route.path === option.path" :light="light" @click="goTo(option.path)" :hideText="isXs"/>
      </div>
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
import {NAV_ITEMS} from '@/constants/content/nav'

const { isXs } = useBreakpoint();
const { getColor, light } = useColor();

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


</script>

<style lang="scss" scoped>
$nav-width-desktop: calcDimension(48px, false, true);
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
    transform: translateX(calc(-1 * max($nav-width-desktop, 36px)));
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
      min-width: 36px;
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
