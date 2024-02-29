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
$icon-size-xs: 30px;
.nav-button {
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: $brand-orange;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 0px;

  @include breakpoint(medium) {

    height: unset;
    width: unset;
    padding: 0px 8px;
  }
}
.button-text {
  font-size: max(calcDimension(8px, true, true), 7px);
  @include breakpoint(medium) {
    font-size: 12px;
  }

  font-weight: 900;
  position: relative;
  width: 100%;

  .text {
    text-align: center;
    width: 100%;
  }
}

.nav-button__icon {
  width: min(20px, calcDimension($icon-size-xs, true, true));
  height: min(20px, calcDimension($icon-size-xs, true, true));
  @include breakpoint(medium) {
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
