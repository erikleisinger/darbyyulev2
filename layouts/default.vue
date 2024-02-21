<template>
  <main class="app-content" :class="{ light }">
    <div class="logo__floating" >
      <Logo
        v-if="!isXs && showLogo"
        :color="light ? getColor('white') : getColor('mustard')"
      />
      <LogoSmall
        v-else-if="isXs && showLogo"
        :color="light ? getColor('white') : getColor('mustard')"
      />
    </div>
    <NavBar />
    <slot />
  </main>
</template>
<script setup>
const { light, getColor } = useColor();
const { isXs } = useBreakpoint();

const route = useRoute();
const showLogo = computed(() => {
  return ["/portfolio", "/contact", "/philosophy"].includes(route.path);
});

</script>
<style lang="scss" scoped>
.app-content {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  overflow: auto;
  &.light {
    background-color: $brand-yellow;
  }

  .logo__floating {
    position: absolute;
    top: calcDimension(18px, true, false);
      right: calcDimension(26px, true, true);
      width: calcDimension(40px, true, true);


    @include breakpoint(small) {
      top: calcDimension(47px, false, false);
      right: calcDimension(51px, false, true);
      width: calcDimension(210px, false, true);
      min-width: 150px;
    }
  }
}
</style>
