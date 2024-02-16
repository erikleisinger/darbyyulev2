<template>
  <div class="splash-container">
    <div class="splash-content">
    <header class="splash-header">
      <Logo width="65%" :color="isXs ? getColor('slate') : getColor('mustard')"/>
    </header>
    <main class="splash-photo">
      <img :src="isXs ? 'splash_photo_mobile.png' : 'splash_photo.png'" />
    </main>
    <nav class="splash-nav d-flex justify-space-between">
        <div>UI DESIGN</div>
        <div>Design strategy</div>
        <div>Graphics</div>
    </nav>
    </div>
  </div>
</template>
<script setup>
const { isXs } = useBreakpoint();
const {getColor} = useColor()
</script>
<style lang="scss" scoped>
.splash-container {
  padding: 90px calcDimension(67.5px, true, true);
@include breakpoint(small) {
    padding: 50px calcDimension(67.5px, true, true);
  }
  .splash-content {
    width: calcDimension(424px, false, true);
    @include breakpoint(small) {
        width: 100%;
    }
    margin: auto;
 .splash-photo {
    width: inherit;
    img {
      width: inherit;
    }
  }

  .splash-header {
    width: inherit;
    margin-bottom: 8px;
  }
  }

.splash-nav {
    text-transform: uppercase;
    div {
        @include breakpoint(small) {
            font-size: 12px;
        }
    }
}
  
 
}
</style>
