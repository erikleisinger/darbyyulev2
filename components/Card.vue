<template>
  <div class="card-container clickable" @click="expanded = true">
    <div class="card-image-container">
      <div class="card-image__control">
        <img :src="item.card.picture" :alt="item.card.alt" />
      </div>
    </div>
    <div class="card-content-container">
      <h2>{{ item.card.title }}</h2>
      <p>{{ item.card.content }}</p>
    </div>
  </div>
  <transition name="page">
    <CardExpanded v-if="expanded" :id="id" @close="expanded = false" />
  </transition>
</template>
<script setup>
import { PORTFOLIO_ITEMS } from "@/constants/content";
const props = defineProps({
  id: [Number, String],
});

const item = PORTFOLIO_ITEMS[props.id];

const expanded = ref(false);
</script>
<style lang="scss" scoped>
.card-container {
  box-shadow: 0px 7.540704250335693px 37.70351791381836px 0px
    rgba(0, 0, 0, 0.25);
  border-radius: 9.63px;
  display: grid;
  grid-template-columns: 30% 70%;
  overflow: hidden;
  flex-grow: 1;
  @include breakpoint(small) {
    width: calcDimension(600px, false, true);
    // min-width: calc(50% - 100px);
    max-width: 50%;
     max-height: 300px;
  }

 

  .card-image-container {
    overflow: hidden;
    
    .card-image__control {
      height: 100%;
      width: 100%;
      position: relative;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .card-content-container {
    padding: 8px 6px;
    padding-bottom: 12px;
    @include breakpoint(small) {
      padding: 15px 11px;
    }

    p {
      font-size: 9px;
      @include breakpoint(small) {
        font-size: calcDimension(17.45px, false, true);
        line-height: calcDimension(23.66px, false, true);
      }
    }
  }
}
</style>
