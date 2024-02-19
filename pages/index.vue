<template>
  <div class="splash-container full-page" v-if="mounted">
    <div class="splash-content">
      <header class="splash-header">
        <Logo
          class="splash-logo"
          :color="isXs ? getColor('slate') : getColor('mustard')"
        />
      </header>
      <main class="splash-photo" >
        <img v-if="isXs" :src="'splash_photo_mobile.png'" class="splash-img"/>
        
        <img v-else :src="'splash_photo.png'" class="splash-img" />
      </main>
      <nav class="splash-nav d-flex">
        <div>UX Design</div>
        <div>Graphics</div>
        <div>UX Writing</div>
      </nav>
    </div>
  </div>
</template>
<script setup>



const { getColor } = useColor();
const {isXs} = useBreakpoint()

const mounted = ref(false)
onMounted(() => {
  mounted.value = true;
})
</script>
<style lang="scss" scoped>
.splash-container {
  padding: calcDimension(51px, true, false) calcDimension(67.5px, true, true);
  padding-bottom: unset;
  box-sizing: border-box;
 
  @include breakpoint(small) {
    padding: unset;
    padding-top: calcDimension(80px, false, false);
    
  
  }
  .splash-content {
    width: 100%;
    @include breakpoint(small) {
      width: fit-content;
     
     
    }
    margin: auto;
    .splash-photo {
        width: 100%;
          height: calcDimension(640px, false, false);
          @include breakpoint(small) {
            width: fit-content;
          }
  
    }

    .splash-header {
      width: fit-content;
      margin-bottom: calcDimension(8px, true, false);
      @include breakpoint(small) {
        margin-bottom: calcDimension(18px, false, false)
      }
    }
  }

  .splash-nav {
    text-transform: uppercase;
    margin-top: calcDimension(14px, true, false);
    @include breakpoint(small) {
      margin-top: calcDimension(30px, false, false)
    }

    div {
      font-size: 8px;
      @include breakpoint(small) {
        font-size: calcDimension(22px, false, false);
      }
    }
    justify-content: space-around;
    @include breakpoint(small) {
      justify-content: space-between;
    }
  }

  .splash-logo {
    height: calcDimension(55px, true, false);
    @include breakpoint(small) {
      height: calcDimension(91px, false, false)
    }
  }

  .splash-img {
    width: 100%;
    @include breakpoint(small) {
      width: unset;
      height: calcDimension(640px, false, false)
    }

  }
}
</style>
