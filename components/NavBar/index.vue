<template>
  <nav
    class="nav-bar d-flex justify-center align-center"
    :class="{ light, expanded, 'flex-column col-reverse': !isMed }"
    :style="{ transform: transform }"
    ref="navbar"
  >
    <div class="swipable" ref="swipable" v-if="!isMed" />
    <div class="nav-menu" :class="{ light }" ref="navMenu">
      <div
        class="nav-menu__button"
        v-for="option in NAV_ITEMS"
        :key="option.name"
      >
        <NavBarButton
          :name="option.icon"
          :text="option.name"
          :selected="route.path === option.path"
          :light="light"
          @click="goTo(option.path)"
        />
      </div>
    </div>
    <div
      class="nav-tab d-flex justify-center align-center"
      style="position: relative"
      :class="{ light, clickable: !expanded }"
      @click="expanded = !expanded"
      ref="tab"
    >
      <Icon
        :name="isMed ? 'mdi:chevron-right' : 'mdi:chevron-up'"
        :color="light ? getColor('mustard') : 'white'"
        
        style="position: absolute; margin: auto"
        class="tab-icon"
        :class="{ expanded }"
      />
      <!-- :size="isMed ? '48px' : '45px'" -->
    </div>
  </nav>
</template>

<script setup>
import { useBreakpoint } from "~/composables/breakpoint";
import {
  onClickOutside,
  useSwipe,
  useEventListener,
  useElementSize,
} from "@vueuse/core";
import { NAV_ITEMS } from "@/constants/content/nav";

const { isXs, isMed } = useBreakpoint();
const { getColor, light } = useColor();

const expanded = ref(false);

const goTo = (path) => {
  expanded.value = false;
  navigateTo(path);
};

const navbar = ref(null);

onClickOutside(navbar, () => {
  expanded.value = false;
});

const route = useRoute();

/**
 * Swipe up on mobile will open the nav bar
 */

const swipable = ref(null);
const tab = ref(null);

const onSwipe = () => {
  if (direction.value === "up") {
    expanded.value = true;
  }
  if (direction.value === "down") {
    expanded.value = false;
  }
};

/**
 * Swipe up on mobile will open the nav bar
 */

const { direction } = useSwipe(navbar, {
  onSwipe,
});

/**
 * Calc show/hide translations
 */

const navMenu = ref(null);

const { height: navHeight, width: navWidth } = useElementSize(navMenu);

const transform = computed(() => {
  if (isMed.value) {
    if (expanded.value) {
      return "translateX(0)";
    } else {
      return `translateX(-${Math.ceil(navWidth.value)}px)`;
    }
  } else {
    if (expanded.value) {
      return "translateY(0)";
    } else {
      return `translateY(${Math.ceil(navHeight.value)}px)`;
    }
  }
});

const transition = ref(null);

onMounted(() => {
  setTimeout(() => {
    transition.value = 'transform 0.2s'
  }, 100)

})

</script>

<style lang="scss" scoped>
$nav-width-desktop: calcDimension(48px, false, true);
$tab-width-desktop: 32px;

.nav-bar {
  z-index: 10;
  position: fixed;
  left: 0;

  bottom: 0;
  right: 0;
  margin: auto;

  @include breakpoint(medium) {
    top: 0;
    right: unset;
  }

  transition: v-bind(transition);
  .swipable {
    transform: translateY(0);
    height: calcDimension(100px, true, false);
  }

  .swipable {
    position: fixed;
    bottom: 0;
    z-index: -1;
    height: calcDimension(80px, true, false);
    transform: translateY(-1 * calc(calcDimension(64px, true, false)));
    width: 100vw;
    pointer-events: all;
  }

  .nav-menu,
  .nav-tab {
    background-color: $brand-yellow;
    &.light {
      background-color: white !important;
    }
  }

  .nav-tab {
    height: min(23px, calcDimension(23px, true, true));

    @include breakpoint(medium) {
      height: calcDimension(165px, false, false);
    }

    width: min(69px, calcDimension(69px, true, true));
    @include breakpoint(medium) {
      width: min($tab-width-desktop, calcDimension($tab-width-desktop, false, true));
      width: $tab-width-desktop;
    }

    border-top-right-radius: min(10px, calcDimension(10px, true, true));
    border-top-left-radius: min(10px, calcDimension(10px, true, true));
    @include breakpoint(medium) {
      border-top-left-radius: unset;
      border-top-right-radius: 16.75px;
      border-bottom-right-radius: 16.75px;
    }

    cursor: pointer;
    $tab-chevron-dimension: 30px;
    $tab-chevron-dimension-desktop: 48px;

     :deep(.tab-icon) {
      transition: transform 0.2s;
      transform: rotate(0deg);
      height: min($tab-chevron-dimension, calcDimension($tab-chevron-dimension, true, true));
       width: min($tab-chevron-dimension, calcDimension($tab-chevron-dimension, true, true));
      &.expanded {
        transform: rotate(180deg);
      }

      @include breakpoint(medium) {
         height: min($tab-chevron-dimension-desktop, calcDimension($tab-chevron-dimension-desktop, true, true));
       width: min($tab-chevron-dimension-desktop, calcDimension($tab-chevron-dimension-desktop, true, true));
      }
    }

   
  }

  .nav-menu {
    @include breakpoint(medium) {
      height: calcDimension(507.27px, false, false);
      max-height: calcDimension(507.27px, false, false);
    }

    width: 100vw;
    @include breakpoint(medium) {
      width: unset;
    }

    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    @include breakpoint(medium) {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    display: flex;

    flex-direction: row;
    @include breakpoint(medium) {
      flex-direction: column;
    }

    .nav-menu__button {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      // @include breakpoint(medium) {
      //   padding: 4px;
      // }
    }
  }
}


</style>
<script>
export default {
  name: "NavBar",
};
</script>
