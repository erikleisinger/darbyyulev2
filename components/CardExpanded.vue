<template>
  <div class="card-expanded__container">
    <main class="card-expanded__content">
      <div class="card-picture">
        <img
          :src="item.expanded.picture"
          :alt="item.expanded.alt"
          :style="{ 'object-position': item.expanded.position }"
        />
      </div>
      <div class="card-content">
        <h1>{{ item.expanded.title }}</h1>
        <p>{{ item.expanded.description }}</p>
        <div class="paragraphs-container">
          <div
            v-for="paragraph in item.expanded.paragraphs"
            :key="paragraph.title"
            class="paragraph"
          >
            <h3>{{ paragraph.title }}</h3>
            <p>{{ paragraph.content }}</p>
          </div>
          "
        </div>
      </div>
    </main>
    <div class="exit-button__floating">
      <Icon
        name="mdi:close"
        class="clickable"
        @click="emit('close')"
        size="2em"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card-expanded__container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: $brand-white;
  z-index: 15;
  overflow: auto;

  .exit-button__floating {
    position: absolute;
    top: 8px;
    right: 8px;
    color: $brand-white;
  }

  .card-expanded__content {
    display: grid;
    grid-template-rows: calcDimension(175px, true, false) auto;
    @include breakpoint(small) {
      grid-template-rows: calcDimension(425px, false, false) auto;
   
    }

    .card-content {
        @include breakpoint(small) {
               margin: 0px calcDimension(122px, false, true);
               margin-top: calcDimension(46px, false, false);
               >p {
                font-size: 18px;
                line-height: 18px;
               }
               >h1 {
                font-size: 46px;
                line-height: 56px;
               }
        }
    }

    .card-picture {
      background-color: yellow;
      overflow: hidden;
      position: relative;
      img {
        object-fit: cover;

        height: 100%;
        width: 100%;

        margin: auto;
      }
    }

    .paragraphs-container {
      @include breakpoint(small) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: calcDimension(84px, false, true);
        margin-top: calcDimension(36px, false, false);
        font-size: 11px;
        line-height: 15px;
      }

      .paragraph {
        min-width: 50%;
      }
    }
  }
}
</style>
<script setup>
import { PORTFOLIO_ITEMS } from "@/constants/content";
const props = defineProps({
  id: [String, Number],
});

const item = PORTFOLIO_ITEMS[props.id];

const emit = defineEmits(["close"]);
</script>
