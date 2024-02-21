<template>
  <div class="nav-button clickable">
    <Icon :name="name" class="nav-button__icon" :color="color" />
    <div class="button-text" :style="{ color: color }" v-if="!hideText">
      <div class="text">{{ text }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$icon-size-desktop: 40px;
.nav-button {
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: $brand-orange;
  }

  @include breakpoint(small) {
    display: block;
    height: unset;
    width: unset;
  }
}
.button-text {
     font-size: max(calcDimension(10px, true, true), 7px);
    @include breakpoint(small) {
  font-size: max(calcDimension(10px, false, true), 7px);
    }

  font-weight: 900;
  position: relative;
  width: 100%;

  .text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: auto;
    text-align: center;
    margin-left: -0%;
  }
}

.nav-button__icon {
  width: 100%;
  height: 100%;
  @include breakpoint(small) {
    height: calcDimension($icon-size-desktop, false, false);
    width: calcDimension($icon-size-desktop, false, false);
    min-width: 24px;
  }
}
</style>
<script setup>
const props = defineProps({
  color: String,
  hideText: Boolean,
  name: String,
  selected: Boolean,
  light: Boolean,
  text: String,
});

const { getColor } = useColor();

const color = computed(() => {
  if (props.color) return props.color;
  if (props.light) {
    return props.selected ? getColor("mustard") : getColor("gray");
  }
  return props.selected ? getColor("white") : getColor("orange");
});
const { isXs } = useBreakpoint();
</script>
