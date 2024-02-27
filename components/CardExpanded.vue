<template>
  <div class="card-expanded__container">
    <main class="card-expanded__content">
      <div class="card-picture">
        <img
          :src="item.expanded.picture"
          :alt="item.expanded.alt"
          :style="{ 'object-position': item.expanded.position, left: isXs ? item.expanded.pictureLeft : '', top: isXs ? item.expanded.pictureTop : '', width: isXs ? item.expanded.pictureWidth : '' }"
        />
      </div>
      <div class="card-content">
        <h1>{{ item.expanded.title }}</h1>
        <p>{{ item.expanded.description }}</p>
        <div v-if="isXs" class="divider">
          <div class="divider-line" />
        </div>
        <div class="paragraphs-container">
          <div
            v-for="(paragraph, index) in item.expanded.paragraphs"
            :key="paragraph.title"
            class="paragraph"
          >
            <h3>{{ indexToRoman(index) }}. {{ paragraph.title }}</h3>
            <p>{{ paragraph.content }}</p>
          </div>
        </div>
        <div v-if="!isXs" class="divider">
          <div class="divider-line" />
        </div>
      </div>
    </main>
    <div class="exit-button__floating">
      <Icon
        name="mdi:close"
        class="clickable"
        @click="emit('close')"
        size="2em"
        :color="getColor(item.expanded.xColor)"
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
    grid-template-rows: calcDimension(193px, true, false) auto;
    @include breakpoint(small) {
      grid-template-rows: calcDimension(425px, false, false) auto;
    }

    .card-content {
      margin: calcDimension(14px, true, false) calcDimension(24px, true, true);
      > h1 {
        font-size: 30px;
        line-height: 36.57px;
      }
      h3 {
        font-size: 10px;
        line-height: 13px;
        font-weight: normal;
      }
      p {
        font-size: 18.75px;
        line-height: 25.43px;
        font-weight: 500;
      }
    
      @include breakpoint(small) {
        margin: calcDimension(46px, false, false)
          calcDimension(122px, false, true);

         >p {
          font-size: 21.49px;
          line-height: 25.79px;
        }
         >h1 {
          font-size: 55px;
          line-height: 67.05px;
        }
      }
      margin-bottom: 64px;
    }

    .card-picture {
      background-color: yellow;
      overflow: hidden;
      position: relative;
      img {
      
       
        object-fit: cover; /* Fill the container */
        position: absolute; /* Position the image absolutely */
   
        transform: translate(-50%, -50%); /* Center the image */
        @include breakpoint(small) {
          object-fit: cover;
          position: relative;
          transform: unset;
          top: unset;
          left: unset;
          height: 100%;
          width: 100%;

          margin: auto;
        }
      }
    }

    .paragraphs-container {
      p, h3 {
        font-size: 11.73px;
        line-height:15.89px;
      }
  
      @include breakpoint(small) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: calcDimension(84px, false, true);
        margin-top: calcDimension(36px, false, false);
        font-size: 11px;
        line-height: 15px;
         p, h3 {
        font-size: 13.43px;
        line-height:18.21px;
      }
      }

      .paragraph {
        min-width: 50%;
        margin-bottom: 16px;
        @include breakpoint(small) {
          margin-bottom: unset;
        }
      }
    }
  }

  .divider {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .divider-line {
      background-color: $brand-yellow;
      width: 100px;
      height: 2px;
      margin: 24px 0px;
      @include breakpoint(small) {
        width: 33%;
        margin-bottom: 0px;
      }
    }
  }
}
</style>
<script setup>
import { PORTFOLIO_ITEMS } from "@/constants/content/portfolio";
import indexToRoman from "@/utils/roman-numerals";
const props = defineProps({
  id: [String, Number],
});

const item = PORTFOLIO_ITEMS[props.id];

const emit = defineEmits(["close"]);

const { isXs } = useBreakpoint();
const { getColor } = useColor();
</script>
