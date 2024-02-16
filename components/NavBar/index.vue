<template>
  <nav
    class="nav-bar d-flex justify-center align-center"
    :class="{ light, expanded, 'flex-column col-reverse': isXs }"
  >
    <div class="nav-menu" :class="{light}">
      <div class="nav-menu__button">
        <NavBarButton name="mdi:home" selected :light="light" />
      </div>
      <div class="nav-menu__button"><NavBarButton name="mdi:home" :light="light"/></div>
      <div class="nav-menu__button"><NavBarButton name="mdi:home" :light="light"/></div>
      <div class="nav-menu__button"><NavBarButton name="mdi:home" :light="light"/></div>
    </div>
    <div
      class="nav-tab d-flex justify-center align-center "
      style="position: relative"
      :class="{ light, clickable: !expanded }"
      @click="expanded = !expanded"
    >
      <Icon
        :name="isXs ? 'mdi:chevron-up' : 'mdi:chevron-right'"
        :color="light ? getColor('mustard') : 'white'"
        :size="isXs ? '45px' : '65px'"
        style="position: absolute; margin: auto"
        class="tab-icon"
        :class="{expanded}"
      />
    </div>
  </nav>
</template>

<script setup>
import { useBreakpoint } from "~/composables/breakpoint";


const { isXs } = useBreakpoint();
const { getColor, light } = useColor();

const expanded = ref(false);


</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  @include breakpoint(small) {
    top: unset;
    right: 0;
  }
  transition: transform 0.2s;
  transform: translateX(calc(-1 * 64px));
  &.expanded {
    transform: translateX(0);
  }

  @include breakpoint(small) {
    transform: translateY(calc(calcDimension(46px, true, false)));
    &.expanded {
      transform: translateY(0);
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
    height: calcDimension(165px, false, false);
    @include breakpoint(small) {
      height: 20px;
    }

    width: 39px;
    @include breakpoint(small) {
      width: 69px;
    }

    border-top-right-radius: 16.75px;
    border-bottom-right-radius: 16.75px;

    @include breakpoint(small) {
      border-bottom-right-radius: unset;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
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
    height: calcDimension(507.27px, false, false);
    max-height:calcDimension(507.27px, false, false);
    @include breakpoint(small) {
      height: calcDimension(46px, true, false);
      max-height: calcDimension(46px, true, false);
    }

    width: 64px;
    @include breakpoint(small) {
      width: 100vw;
    }

    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    @include breakpoint(small) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    display: flex;
    flex-direction: column;
    @include breakpoint(small) {
      flex-direction: row;
    }

    .nav-menu__button {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
        padding: 10px;

    @include breakpoint(small) {
      padding: calcDimension(8px, true, false);
    }
    }

  
  }
}
</style>
<script>
export default {
  name: 'NavBar'
}
</script>
